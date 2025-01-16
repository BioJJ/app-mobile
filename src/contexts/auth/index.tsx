import AsyncStorage from '@react-native-async-storage/async-storage'

import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState
} from 'react'
import { Alert } from 'react-native'
import Toast from 'react-native-toast-message'

import { EmployeeService } from '../../services'
import { OfflineQueueUse } from '../OfflineQueue'
import { User } from '../../models/User'

export interface AuthType {
	loading: boolean
	globalLoading: boolean
	logged: boolean
	employeeData: User
	AuthVerify: () => Promise<void>
	LogIn: (login: string, password: string) => Promise<void>
	LogOut: () => void
}

export interface AuthProviderProps {
	children: React.ReactNode
}

export const AuthContext = createContext<AuthType>({} as AuthType)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const { SignIn, SignOut, GetEmployeeStorage } = EmployeeService
	const [loading, setLoading] = useState<boolean>(false)
	const [globalLoading, setGlobalLoading] = useState<boolean>(false)
	const [logged, setLogged] = useState<boolean>(false)

	const { GetConnection } = OfflineQueueUse()

	const [employeeData, setEmployeeData] = useState<User>({} as User)

	const connected = useMemo(() => {
		return GetConnection()
	}, [GetConnection()])

	useEffect(() => {
		AuthVerify()
	}, [connected])

	const AuthVerify = async () => {
		setGlobalLoading(true)
		try {
			const phoneUuidValid = await AsyncStorage.getItem('@appMobile:token')

			if (phoneUuidValid) {
				const employee = await GetEmployeeStorage()
				setEmployeeData(employee as User)

				setLogged(true)
			} else {
				SignOut()
				setLogged(false)
			}
		} catch (error) {
			setEmployeeData({} as User)
			SignOut()
			setLogged(false)
			console.error(JSON.stringify(error))
			Toast.show({
				type: 'error',
				position: 'bottom',
				text1: 'Erro ao autenticar o Usuário ❌',
				text2: 'Tente novamente'
			})
		} finally {
			setGlobalLoading(false)
		}
	}

	const loginValid = async (user: User) => {
		await AsyncStorage.setItem('@appMobile:token', user.token)
		await AsyncStorage.setItem('@appMobile:User', JSON.stringify(user))

		setEmployeeData(user)

		setLogged(true)
	}

	const LogIn = async (login: string, password: string) => {
		setLoading(true)
		try {
			const response = await SignIn(login, password)
			if (response.error) {
				SignOut()

				Toast.show({
					type: 'error',
					text1: 'Erro no login!',
					text2: `Tente Novamente ❌`
				})
			} else {
				Toast.show({
					type: 'success',
					position: 'bottom',
					text1: 'Acesso Concluído',
					text2: `Dispositivo Cadastrado 👋`
				})

				await loginValid(response.user)
			}
		} catch (error) {
			console.error('error ao logar', JSON.stringify(error))
			SignOut()
			Toast.show({
				type: 'error',
				text1: 'Erro ao autenticar o Usuário',
				text2: 'Tente novamente ❌'
			})
			setLogged(false)
		} finally {
			setLoading(false)
		}
	}

	const LogOut = () => {
		setLoading(true)
		try {
			SignOut()

			setEmployeeData({} as User)

			setLogged(false)
		} catch {
			Alert.alert('Error ao Deslogar')
		} finally {
			setLoading(false)
		}
	}

	const providerValue = useMemo(() => {
		return {
			globalLoading,
			loading,
			logged,
			employeeData,
			AuthVerify,
			LogIn,
			LogOut
		}
	}, [globalLoading, loading, logged, employeeData, AuthVerify, LogIn, LogOut])

	return (
		<AuthContext.Provider value={providerValue}>
			{children}
		</AuthContext.Provider>
	)
}

export const AuthUse = (): AuthType => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
