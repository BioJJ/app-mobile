import React from 'react'
import { Brands } from '../../models/Brand'
import { TouchableContainer, Container, DateView, TitleName } from './style'

type Props = {
	data: Brands
	onPress: (data: Brands) => void
}

export function BrandInfo({ data, onPress }: Readonly<Props>) {
	return (
		<TouchableContainer onPress={() => onPress(data)}>
			<Container>
				<DateView>
					<TitleName>
						{data.codigo.toString()} - {data.nome.toString()}
					</TitleName>
				</DateView>
			</Container>
		</TouchableContainer>
	)
}
