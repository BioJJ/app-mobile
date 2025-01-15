import React from 'react'
import {
	Avatar,
	Registration,
	Subtitle,
	Title,
	UserContainer,
	UserLogo
} from './style'

interface InfoProps {
	title: string
	subtitle: string
	pis: string
}

interface HeaderInfoProps {
	headerProps?: InfoProps
}

export function HeaderInfo({ headerProps }: Readonly<HeaderInfoProps>) {
	if (!headerProps) {
		return null
	}
	return (
		<>
			<UserLogo>
				<Avatar source={require('../../../assets/user.png')} />
				<Registration>{headerProps.pis}</Registration>
			</UserLogo>
			<UserContainer>
				<Title>{headerProps.title}</Title>
				<Subtitle>{headerProps.subtitle}</Subtitle>
			</UserContainer>
		</>
	)
}
