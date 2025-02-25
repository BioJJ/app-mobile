import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { Dimensions, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AuthUse } from '../../contexts/auth'
import { HeaderEmployeeIcons } from '../HeaderEmployeeIcons'
import { HeaderInfo } from '../HeaderInfo'
import { Button, Container } from './style'
import { MaterialIcons } from '@expo/vector-icons'

interface HeaderProps {
	title: string
	subtitle: string
	pis: any
}

interface HeaderHomeProps {
	type: 'employee' | 'admin'
	status: 'wifi' | 'wifi-off'
	aux?: boolean
}

export function HeaderHome({ type, status, aux }: Readonly<HeaderHomeProps>) {
	const navigation = useNavigation()
	const { employeeData } = AuthUse()
	const [headerProps, setHeaderProps] = useState<HeaderProps>()
	const [iconProps, setIconProps] = useState<boolean>(false)
	const [iconListProps, setIconListProps] = useState<boolean>(false)
	const height = Dimensions.get('window').height
	const insets = useSafeAreaInsets()
	useFocusEffect(
		useCallback(() => {
			if (type === 'employee') {
				setHeaderProps({
					title: 'Olá,',
					subtitle: employeeData.name,
					pis: employeeData.id
				})
				setIconProps(true)
				setIconListProps(false)
			} else if (type === 'admin') {
				setHeaderProps({
					title: 'Olá',
					subtitle: 'admin',
					pis: ''
				})
				setIconProps(false)
				setIconListProps(true)
			}
		}, [type])
	)

	function handleListClose() {
		setIconListProps(false)
		navigation.goBack()
	}

	return (
		<Container style={{ paddingTop: Platform.OS === 'ios' ? insets.top : 0 }}>
			<HeaderInfo headerProps={headerProps} />

			{iconProps && !aux && <HeaderEmployeeIcons status={status} aux={aux} />}

			{aux && (
				<Button onPress={handleListClose}>
					<MaterialIcons
						name="close-fullscreen"
						size={height > 1365 ? 32 : height < 933 ? 22 : 22}
						color="#FFF"
					/>
				</Button>
			)}
		</Container>
	)
}
