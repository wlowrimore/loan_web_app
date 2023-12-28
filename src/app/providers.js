'use client'

import { SessionProvider } from 'next-auth/react'
import { FormDataProvider } from '../../FormDataContext'

export const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <FormDataProvider>
        {children}
      </FormDataProvider>
    </SessionProvider>
  )
}
