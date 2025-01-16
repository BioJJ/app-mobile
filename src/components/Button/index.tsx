import { FontAwesome } from '@expo/vector-icons'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './style'

type Props = TouchableOpacityProps & {
	title?: string
	color: string
	titleColor: string
	iconName?: any
	borderColor?: string
	borderWidth?: number
	iconSize?: number
	width?: number | string
	height?: number
	fontSize?: number
	borderRadius?: number
}

export function Button({
	title,
	color,
	titleColor,
	iconName,
	width,
	height,
	fontSize,
	iconSize,
	borderRadius,
	borderColor,
	borderWidth,
	...rest
}: Props) {
	const containerStyle = {
		...styles.container,
		backgroundColor: color,
		width,
		height,
		borderRadius,
		borderColor,
		borderWidth
	}

	const titleStyle = {
		...styles.title,
		color: titleColor,
		fontSize
	}

	return (
		<TouchableOpacity style={containerStyle as any} {...rest}>
			<Text style={titleStyle}>{title}</Text>
			{iconName && (
				<FontAwesome name={iconName} size={iconSize ?? 20} color={titleColor} />
			)}
		</TouchableOpacity>
	)
}
