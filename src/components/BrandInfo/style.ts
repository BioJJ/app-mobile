import styled from 'styled-components/native'
import { TouchableOpacity, View, Text } from 'react-native'

export const TouchableContainer = styled(TouchableOpacity)`
	width: 100%;
	height: 70px;
`

// Estilizando o contêiner principal
export const Container = styled(View)`
	flex: 1;
	height: ${({ theme }: any) =>
		theme.height > 1365 ? '90px' : theme.height < 933 ? '70px' : '40px'};
	background-color: #f2f3f5;
	border-color: #1977b7;
	border-width: 1px;
	padding: 12px;
	border-radius: 8px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${({ theme }: any) =>
		theme.height > 1365 ? '18px' : theme.height < 933 ? '12px' : '12px'};
`

export const TitleName = styled(Text)`
	flex: 1;
	color: #1977b7;
	font-size: ${({ theme }: any) =>
		theme.height > 1365 ? '25px' : theme.height < 933 ? '14px' : '14px'};
`

export const DateView = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`
