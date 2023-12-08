'use client'

import { getSession, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Alert } from '../ui/alert'
import Link from 'next/link'

const SignInForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [session, loading] = useState()
  const router = useRouter()
  const callbackUrl = (router.query?.callbackUrl) ?? '/dashboard'

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (res?.error) {
        setError('Could not verify user credentials. Please try again or sign up.')
      } else {
        router.push(callbackUrl)
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error('Error during sign in:', error)
      setError('An error occurred during sign in.')
    }
  }

  // useEffect(() => {
  //   if (!loading && session) {
  //     const refreshSession = async () => {
  //       await getSession({ redirect: true })
  //     }
  //     if (isLoggedIn) {
  //       refreshSession()
  //     }
  //   }
  // }, [loading, session, isLoggedIn])

  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col space-y-8 p-6 bg-gradient-to-b from-emerald-100 to-emerald-50 rounded-lg'>
      <h1 className='text-xl font-bold text-emerald-800'>Welcome Back</h1>
      <input
        required
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='w-full border-b border-neutral-500 bg-transparent outline-none focus:placeholder:text-emerald-700 focus:placeholder:opacity-70 focus:placeholder:translate-x-[17.5rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />
      <input
        required
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='w-full border-b border-neutral-500 bg-transparent outline-none focus:placeholder:text-emerald-700 focus:placeholder:opacity-70 focus:placeholder:translate-x-[17.5rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />
      {error && <Alert>{error}</Alert>}
      <div>
        <button type='submit' className='w-full bg-emerald-300 font-bold py-2 px-6 rounded outline-none'>Sign in</button>
      </div>
      <div>
        <p className='text-sm text-center'>Don&apos;t have an account?&nbsp;<Link href='/register' className='text-indigo-500'>Register here</Link>.</p>
      </div>
    </form>

  )
}

export default SignInForm