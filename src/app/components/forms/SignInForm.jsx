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

  return (
    <>
      <form onSubmit={handleFormSubmit} className='flex flex-col space-y-4 pt-2 pb-4 px-3 mt-4 w-full bg-emerald-800 rounded-lg'>
        <h1 className='text-xl font-bold text-emerald-200 mt-2'>Welcome To ALG</h1>
        <input
          required
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='w-full h-[2rem] text-neutral-800 text-lg px-2 outline-none placeholder:text-emerald-800 focus:placeholder:text-emerald-950 focus:placeholder:opacity-70 focus:placeholder:translate-x-[18rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
        />
        <input
          required
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='w-full h-[2rem] text-neutral-800 text-lg px-2 outline-none placeholder:text-emerald-800 focus:placeholder:text-emerald-950 focus:placeholder:opacity-70 focus:placeholder:translate-x-[16.5rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
        />
        {error && <Alert>{error}</Alert>}
        <div>
          <button type='submit' className='w-full bg-emerald-300 font-bold py-2 px-6 rounded outline-none'>Sign in</button>
        </div>
        <div>
          <p className='text-sm text-white text-center'>Don&apos;t have an account?&nbsp;<Link href='/register' className='text-cyan-400'>Register here</Link>.</p>
        </div>
      </form>
    </>
  )
}

export default SignInForm