import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Brands } from '../../models/Brand'
import { Model } from '../../models/Model'

const HTTPClient = axios.create({
	baseURL: 'https://parallelum.com.br/fipe'
})

const getBrands = async () => {
	return await HTTPClient.get<Brands[]>(`/api/v1/carros/marcas`)
}

const getModels = async (id: string) => {
	return await HTTPClient.get<Model[]>(`/api/v1/carros/marcas/${id}/modelos/`)
}

export default {
	GetBrandsData: async () => {
		const response = await getBrands()
		return response.data
	},
	GetModelsData: async (employeePis: string) => {
		const response = await getModels(employeePis)
		return response.data
	},

	GetBrandsStorage: async () => {
		const data = await AsyncStorage.getItem('@appMobile:ReadBrands')

		return data ? JSON.parse(data) : null
	},

	GetModelsStorage: async () => {
		const data = await AsyncStorage.getItem('@appMobile:ReadModels')

		return data ? JSON.parse(data) : null
	},

	SignOut: async () => {
		await AsyncStorage.removeItem('@appMobile:ReadBrands')
		await AsyncStorage.removeItem('@appMobile:ReadModels')
	}
}
