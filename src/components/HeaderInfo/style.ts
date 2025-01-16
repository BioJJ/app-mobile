import styled from 'styled-components/native'
import { Image, Text, View } from 'react-native'

export const UserLogo = styled(View)`
	align-items: center;
`

export const Avatar = styled(Image)`
	width: 46px;
	height: ${({ theme }: any) => (theme.height > 1365 ? '70px' : '46px')};
	border-radius: 5px;
`

export const UserContainer = styled(View)`
	flex: 1;
	margin-left: 20px;
`

export const Title = styled(Text)`
	color: #fff;
	font-size: ${({ theme }: any) =>
		theme.height > 1365 ? '30px' : theme.height < 933 ? '16px' : '15px'};
`

export const Subtitle = styled(Text)`
	color: #fff;
	font-size: ${({ theme }: any) =>
		theme.height > 1365 ? '22px' : theme.height < 933 ? '14px' : '13px'};
	margin-left: 7px;
`

export const Registration = styled(Text)`
	color: #fff;
	font-size: 12px;
	font-weight: bold;
`
