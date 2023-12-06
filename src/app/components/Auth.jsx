'use client'

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
  return <button className='bg-teal-400/70 border border-emerald-700 text-emerald-800 py-1 px-3 rounded hover:bg-teal-500/70 hover:text-white transform transition duration-300' onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
  return <button className='bg-teal-400/70 border border-emerald-700 text-emerald-800 py-1 px-3 rounded hover:bg-teal-500/70 hover:text-white transform transition duration-300' onClick={() => signOut()}>Sign Out</button>
}