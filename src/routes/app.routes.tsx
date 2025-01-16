import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DetailsModel from '../screens/DetailsModel'
import Home from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export const App = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="Home" component={Home} />
			<Screen name="DetailsBrand" component={DetailsModel as any} />
		</Navigator>
	)
}
