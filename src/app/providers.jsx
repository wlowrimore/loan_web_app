'use client'

import { SessionProvider } from 'next-auth';

export const Providers = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}
