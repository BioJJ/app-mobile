import { StatusBar } from 'react-native'
import Toast from 'react-native-toast-message'
import Reactotron from 'reactotron-react-native'

import { AppProvider } from './src/contexts'
import { Routes } from './src/routes'

import 'react-native-gesture-handler'

declare global {
	interface Console {
		tron: typeof Reactotron
	}
}

Reactotron.configure({ name: 'APP Mobile' }).connect()

console.tron = Reactotron

export default function App() {
	return (
		<AppProvider>
			<StatusBar backgroundColor={'#1977b7'} barStyle={'light-content'} />
			<Routes />
			<Toast />
		</AppProvider>
	)
}
