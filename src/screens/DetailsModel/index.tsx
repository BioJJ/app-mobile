import React, { useCallback, useMemo, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as Animatable from 'react-native-animatable'

import { HeaderHome } from '../../components/HeaderHome'
import { BrandInfo } from '../../components/BrandInfo'

import { OfflineQueueUse } from '../../contexts/OfflineQueue'
import { CarUse } from '../../contexts/Car'

import { Brands } from '../../models/Brand'
import { Car } from '../../models/Car'

import { Container, FlatListData, Title } from './style'

type Props = { DetailsModel: { brand: Brands } }

const DetailsModel = ({
	route
}: NativeStackScreenProps<Props, 'DetailsModel'>) => {
	const { brand } = route.params
	const { GetModels, models } = CarUse()
	const { GetConnection } = OfflineQueueUse()

	const [cars, setCars] = useState<Car[]>([])

	const status = useMemo(
		() => (GetConnection() ? 'wifi' : 'wifi-off'),
		[GetConnection()]
	)

	useFocusEffect(
		useCallback(() => {
			if (GetConnection()) {
				GetModels(brand.codigo)

				setCars(models.modelos)
			}
		}, [])
	)

	return (
		<Container>
			<Animatable.View
				animation={'fadeInDown'}
				delay={500}
				style={{ width: '100%' }}
			>
				<FlatListData
					data={cars}
					keyExtractor={({ codigo }: any) => codigo.toString()}
					renderItem={({ item }: any) => (
						<BrandInfo data={item} onPress={() => {}} />
					)}
					ListHeaderComponent={() => (
						<>
							<HeaderHome type={'employee'} status={status} aux={true} />
							<Title>{brand.nome}</Title>
						</>
					)}
					style={{ width: '100%' }}
				/>
			</Animatable.View>
		</Container>
	)
}

export default DetailsModel
