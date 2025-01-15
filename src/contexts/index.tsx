import React from 'react'

import { AuthProvider } from './auth'
import { CommunicationProvider } from './CommunicationNotification'
import { OfflineQueueProvider } from './OfflineQueue'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<OfflineQueueProvider>
			<AuthProvider>
				<CommunicationProvider>{children}</CommunicationProvider>
			</AuthProvider>
		</OfflineQueueProvider>
	)
}
