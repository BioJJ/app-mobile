import NetInfo from '@react-native-community/netinfo'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import Toast from 'react-native-toast-message'

interface OfflineQueueProviderProps {
	children: React.ReactNode
}

export interface OfflineQueueType {
	loadingOff: boolean
	GetConnection: () => boolean
	LogInRegistry: (movement: any) => Promise<void>
}

export const OfflineQueueContext = createContext<OfflineQueueType>(
	{} as OfflineQueueType
)

export const OfflineQueueProvider: React.FC<OfflineQueueProviderProps> = ({
	children
}) => {
	const [loadingOff, setLoadingOff] = useState(false)

	const [isConnected, setIsConnected] = useState(false)

	useEffect(() => {
		const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
			setIsConnected(state.isConnected as boolean)
		})

		return () => removeNetInfoSubscription()
	}, [])

	const GetConnection = () => {
		return isConnected
	}

	const LogInRegistry = async (newLogin: any) => {
		setLoadingOff(true)

		newLogin.success = true

		Toast.show({
			type: 'success',
			position: 'bottom',
			text1: 'adicionado à fila de sincronização!'
		})

		setLoadingOff(false)
	}

	const providerValue = useMemo(() => {
		return {
			loadingOff,
			LogInRegistry,
			GetConnection
		}
	}, [loadingOff, LogInRegistry, GetConnection])

	return (
		<OfflineQueueContext.Provider value={providerValue}>
			{children}
		</OfflineQueueContext.Provider>
	)
}

export const OfflineQueueUse = () => {
	const context = useContext(OfflineQueueContext)
	return context
}
