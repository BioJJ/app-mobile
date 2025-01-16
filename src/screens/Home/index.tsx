import { useCallback, useMemo, useState } from 'react'
import { RefreshControl } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { HeaderHome } from '../../components/HeaderHome'
import { AuthUse } from '../../contexts/auth'
import { OfflineQueueUse } from '../../contexts/OfflineQueue'
import { Container, FlatListData } from './style'
import { CarUse } from '../../contexts/Car'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { BrandInfo } from '../../components/BrandInfo'
import { Brands } from '../../models/Brand'

const Home = () => {
	const navigation = useNavigation()
	const [refreshing, setRefreshing] = useState(false)
	const { AuthVerify } = AuthUse()
	const { GetConnection } = OfflineQueueUse()
	const { GetBrands, brands } = CarUse()

	const status = useMemo(
		() => (GetConnection() ? 'wifi' : 'wifi-off'),
		[GetConnection()]
	)

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		AuthVerify()
		setRefreshing(false)
	}, [AuthVerify])

	useFocusEffect(
		useCallback(() => {
			if (GetConnection()) {
				GetBrands()
			}
		}, [])
	)

	const handlePressItem = (selectedItem: Brands) => {
		navigation.navigate('DetailsBrand', {
			brand: selectedItem
		})
	}

	return (
		<Container>
			<Animatable.View
				animation={'fadeInDown'}
				delay={500}
				style={{ width: '100%' }}
			>
				<FlatListData
					data={brands}
					keyExtractor={({ codigo }: any) => codigo.toString()}
					renderItem={({ item }: any) => (
						<BrandInfo data={item} onPress={handlePressItem} />
					)}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
					ListHeaderComponent={() => (
						<HeaderHome type={'employee'} status={status} />
					)}
					style={{ width: '100%' }}
				/>
			</Animatable.View>
		</Container>
	)
}

export default Home
