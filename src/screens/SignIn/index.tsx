import React from 'react'
import { View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Toast from 'react-native-toast-message'
import { useForm, Controller } from 'react-hook-form'

import { AuthUse } from '../../contexts/auth'
import { Container, Input, Logo, StyledButton, Version } from './style'

const SigIn = () => {
	const { LogIn } = AuthUse()
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			user: 'teste',
			password: '123'
		}
	})

	const onSubmit = async (data: { user: any; password: any }) => {
		const { user, password } = data

		if (!user.trim()) {
			Toast.show({
				type: 'error',
				text1: 'Campo Obrigatório ❌',
				text2: 'User é obrigatório.'
			})
		} else if (!password.trim()) {
			Toast.show({
				type: 'error',
				text1: 'Campo Obrigatório ❌',
				text2: 'Senha é obrigatório.'
			})
		} else {
			await LogIn(user, password)
		}
	}

	return (
		<Container>
			<Animatable.View animation={'fadeInDown'} delay={500} style={{ flex: 1 }}>
				<Logo
					source={require('../../../assets/logo-sigIn.png')}
					resizeMode="contain"
				/>
				<View style={{ width: '100%', alignItems: 'center', gap: 1 }}>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								onChangeText={onChange}
								placeholder="Digite seu usuario..."
								value={value}
								onBlur={onBlur}
							/>
						)}
						name="user"
					/>
					{/* {errors.user && (
						<Toast show={{ type: 'error', text1: 'User é obrigatório' }} />
					)} */}

					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<Input
								onChangeText={onChange}
								placeholder="Digite sua senha..."
								value={value}
								onBlur={onBlur}
								secureTextEntry
							/>
						)}
						name="password"
					/>
					{/* {errors.password && (
						<Toast show={{ type: 'error', text1: 'Senha é obrigatória' }} />
					
					)} */}
				</View>

				<StyledButton title="Acessar" onPress={handleSubmit(onSubmit)} />

				<Version>v0.0.1</Version>
			</Animatable.View>
		</Container>
	)
}

export default SigIn
