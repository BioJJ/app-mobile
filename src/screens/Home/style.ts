import styled from 'styled-components/native'
import { FlatList, ScrollView, View } from 'react-native'

export const Container = styled(View)`
	flex: 1;
	background-color: #f2f3f5;
	align-items: center;
	width: 100%;
`

export const ContainerList = styled(View)`
	flex: 1;
`

export const ContainerScrollView = styled(View)``

export const ContainerHeader = styled(ScrollView)`
	width: '100%';
	flex: 1;
	border-bottom: 1px solid red;
	padding-top: ${({ theme }: any) =>
		theme.height > 1000 ? '10%' : theme.height > 800 ? '25%' : '15%'};
`
export const FlatListData = styled(FlatList)`
	width: 100%;
`;
