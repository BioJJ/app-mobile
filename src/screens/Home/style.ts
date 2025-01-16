import styled from 'styled-components/native'
import { FlatList, Text, View } from 'react-native'

export const Container = styled(View)`
	flex: 1;
	background-color: #f2f3f5;
	align-items: center;
	width: 100%;
`

export const FlatListData = styled(FlatList)`
	width: 100%;
`

export const Title = styled(Text)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	margin-bottom: 10px;
	padding: 10px;
`
