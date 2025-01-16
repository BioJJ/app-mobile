import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SigIn from '../screens/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export const Auth = () => {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="SigIn" component={SigIn} />
		</Navigator>
	)
}
