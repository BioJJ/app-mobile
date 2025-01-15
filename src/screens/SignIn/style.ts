// import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import styled from 'styled-components/native'
import { Button } from '../../components/Button'
import { TextInput } from 'react-native'

// Styled Components
export const Container = styled.View`
	flex: 1;
	background-color: #f2f3f5;
`

export const ContainerHeader = styled.View`
	flex: 1;
	gap: 30px;
`

export const Logo = styled.Image`
	margin-top: 5%;
	width: 100%;
	height: 40%;
`

export const Input = styled(TextInput)`
	border-radius: 4px;
	width: 93%;
	height: 50px;
	/* font-size: 2.5%; */
	text-align: center;
	color: #b0c4de;
	margin-top: 5%;
	border:1px solid  #b0c4de;
	
`

export const Version = styled`
	position: absolute;
	bottom: 2px;
	left: 30px;
	color: #b0c4de;
	border: 1px solid red;
`

export const StyledButton = styled(Button)`
	margin-top: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
`
