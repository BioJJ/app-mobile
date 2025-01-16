import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { View, Text } from 'react-native'

import { AuthUse } from '../contexts/auth'

import { App } from './app.routes'
import { Auth } from './auth.routes'

export function Routes() {
	const { logged, globalLoading } = AuthUse()

	if (globalLoading)
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>App carregando...</Text>
			</View>
		)

	return (
		<NavigationContainer>{logged ? <App /> : <Auth />}</NavigationContainer>
	)
}
