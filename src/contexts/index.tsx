import React from 'react'

import { AuthProvider } from './auth'
import { CarProvider } from './Car'
import { OfflineQueueProvider } from './OfflineQueue'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<OfflineQueueProvider>
			<AuthProvider>
				<CarProvider>{children}</CarProvider>
			</AuthProvider>
		</OfflineQueueProvider>
	)
}
