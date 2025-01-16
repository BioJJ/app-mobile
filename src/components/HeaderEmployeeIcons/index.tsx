import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'

import { Button, ButtonIcons, StatusText, StatusContainer } from './style'
import { AuthUse } from '../../contexts/auth'

interface HeaderEmployeeIconsProps {
	status: 'wifi' | 'wifi-off'
	aux?: boolean
}

export function HeaderEmployeeIcons({
	status
}: Readonly<HeaderEmployeeIconsProps>) {
	const { LogOut } = AuthUse()
	const height = Dimensions.get('window').height

	function handleLogOut() {
		LogOut()
	}

	return (
		<ButtonIcons>
			<StatusContainer>
				<MaterialIcons
					name={status}
					size={height > 1365 ? 62 : 32}
					color="#FFF"
				/>
				<StatusText>{status === 'wifi' ? 'Online' : 'Offline'}</StatusText>
			</StatusContainer>
			<Button onPress={handleLogOut}>
				<MaterialIcons
					name="logout"
					size={height > 1365 ? 32 : 22}
					color="#fff"
				/>
			</Button>
		</ButtonIcons>
	)
}
