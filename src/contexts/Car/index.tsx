import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import Toast from 'react-native-toast-message'

import CarService from '../../services/CarService'
import { AuthUse } from '../auth'
import { OfflineQueueUse } from '../OfflineQueue'
import { Brands } from '../../models/Brand'
import { Model } from '../../models/Model'

interface CarProviderProps {
	children: React.ReactNode
}

export interface CarType {
	loading: boolean
	globalLoading: boolean
	brands: Brands[]
	models: Model
	LogOut: () => Promise<void>
	GetBrands: () => Promise<void>
	GetModels: (brandID: string) => Promise<void>
}

export const CarContext = createContext<CarType>({} as CarType)

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
	const { GetBrandsData, GetModelsData, GetBrandsStorage, SignOut } = CarService
	const [loading, setLoading] = useState(false)
	const [globalLoading, setGlobalLoading] = useState(false)

	const [brands, setBrands] = useState<Brands[]>([])
	const [models, setModels] = useState<Model>({} as Model)

	const { employeeData } = AuthUse()
	const { GetConnection } = OfflineQueueUse()

	const connected = useMemo(() => {
		return GetConnection()
	}, [GetConnection()])

	useEffect(() => {
		CarVerify()
	}, [connected])

	const CarVerify = async () => {
		setGlobalLoading(true)
		try {
			if (connected && employeeData.id) {
				await GetBrands()
			}
			const readStorage = await GetBrandsStorage()

			if (readStorage) {
				setBrands(readStorage)
			}
		} catch (error) {
			setBrands([])
			console.error('CarVerify ==> ', error)
		} finally {
			setGlobalLoading(false)
		}
	}

	const LogOut = async () => {
		setLoading(true)
		try {
			await SignOut()
			setBrands([])
		} catch (error) {
			console.error(JSON.stringify(error))
			Toast.show({
				type: 'error',
				position: 'bottom',
				text1: 'Erro ao deslogar Ponto',
				text2: 'Tente novamente!'
			})
		} finally {
			setLoading(false)
		}
	}

	const GetBrands = async () => {
		setLoading(true)
		try {
			const readList = await GetBrandsData()

			await AsyncStorage.setItem(
				'@appMobile:ReadBrands',
				JSON.stringify(readList)
			)
			setBrands(readList)
		} catch (error) {
			console.error('GetBrands ==> ', error)
		} finally {
			setLoading(false)
		}
	}

	const GetModels = async (brandID: string) => {
		setLoading(true)
		try {
			const readList = await GetModelsData(brandID)

			await AsyncStorage.setItem(
				'@appMobile:ReadModels',
				JSON.stringify(readList)
			)
			setModels(readList)
		} catch (error) {
			console.error('GetModels ==> ', error)
		} finally {
			setLoading(false)
		}
	}

	const providerValue = useMemo(() => {
		return {
			loading,
			globalLoading,
			brands,
			models,
			LogOut,
			GetBrands,
			GetModels
		}
	}, [loading, globalLoading, brands, models, LogOut, GetBrands, GetModels])

	return (
		<CarContext.Provider value={providerValue}>{children}</CarContext.Provider>
	)
}

export const CarUse = () => {
	const context = useContext(CarContext)
	return context
}
