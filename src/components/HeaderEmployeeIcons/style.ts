import styled from 'styled-components/native'
import { TouchableOpacity, View, Text } from 'react-native'

export const Button = styled(TouchableOpacity)`
	height: ${({ theme }: any) => (theme.height > 1365 ? '70px' : '46px')};
	width: ${({ theme }: any) => (theme.height > 1365 ? '74px' : '50px')};
	border-radius: 4px;
	border-color: #e3e3e3;
	border-width: 1px;
	justify-content: center;
	align-items: center;
	margin-left: 10px;
`

export const ButtonIcons = styled(View)`
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`

export const StatusText = styled(Text)`
	color: #fff;
	font-size: ${({ theme }: any) => (theme.height > 1365 ? '22px' : '14px')};
`

export const StatusContainer = styled(View)`
	justify-content: center;
	align-items: center;
`
