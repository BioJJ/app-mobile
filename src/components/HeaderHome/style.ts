
import styled from 'styled-components/native'
import { TouchableOpacity, View } from 'react-native'

export const Container = styled(View)`
	width: 100%;
	height: ${({ theme }: any) =>
		theme.height > 1365 ? '170px' : theme.height < 933 ? '130px' : '110px'};
	background-color: #1977b7;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding-horizontal: 15px;
`

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
