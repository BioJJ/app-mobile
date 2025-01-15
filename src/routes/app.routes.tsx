import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Communications from '../screens/Communications'
import DetailsCommunication from '../screens/DetailsCommunication'
import Home from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export const App = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={Home} />
			<Screen name="Communications" component={Communications} />
			<Screen
				name="DetailsCommunication"
				component={DetailsCommunication as any}
			/>
		</Navigator>
	)
}
