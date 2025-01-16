import AsyncStorage from '@react-native-async-storage/async-storage'

import { HTTPClient } from '../../config/request'
import { ApiResponse } from '../../models/ApiResponse'
import { User } from '../../models/User'

const registerRegistration = async (login: string, password: string) => {
	return await HTTPClient.post<ApiResponse>(`/signIn`, {
		user: login,
		password
	})
}

export default {
	SignIn: async (login: string, password: string): Promise<ApiResponse> => {
		try {
			const response = await registerRegistration(login, password)
			return response.data
		} catch (error) {
			console.error('Erro no login do Usuario:', error)
			throw error
		}
	},

	SignOut: () => {
		AsyncStorage.removeItem('@appMobile:token')
		AsyncStorage.removeItem('@appMobile:User')
	},

	GetEmployeeStorage: async (): Promise<User | null> => {
		const data = await AsyncStorage.getItem('@appMobile:User')

		return data ? (JSON.parse(data) as User) : null
	}
}
