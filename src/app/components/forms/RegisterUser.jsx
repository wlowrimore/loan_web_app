'use client'

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react'
import { Alert } from '../ui/alert';

const RegisterUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          name
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (res.ok) {
        signIn()
      } else {
        setError('This user already exisists.')
      }
    } catch (error) {
      setError(error?.message)
      console.error(error)
    }

    console.log('Register!')
  }

  return (
    <form onSubmit={handleFormSubmit} className='flex flex-col space-y-8 p-6 bg-gradient-to-b from-emerald-100 to-emerald-50 rounded-lg'>
      <h1 className='text-xl font-bold text-emerald-800'>Create Your Account</h1>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        id='name'
        placeholder='Full Name'
        className='w-full border-b border-neutral-500 bg-transparent outline-none focus:placeholder:text-emerald-700 focus:placeholder:opacity-70 focus:placeholder:translate-x-[17.5rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />

      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        id='email'
        placeholder='Email'
        className='w-full border-b border-neutral-500 bg-transparent outline-none focus:placeholder:text-emerald-700 focus:placeholder:opacity-70 focus:placeholder:translate-x-[17.5rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />

      <input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        id='password'
        placeholder='Password'
        className='w-full border-b border-neutral-500 bg-transparent outline-none focus:placeholder:text-emerald-700 focus:placeholder:opacity-70 focus:placeholder:translate-x-[16rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />
      {error && <Alert>{error}</Alert>}
      <button className='w-full bg-emerald-300 font-bold py-2 px-6 rounded outline-none'>Create Account</button>
      <div className='text-center'>
        <button onClick={(e) => signIn()} className='text-sm'>Already registered? <span className='text-indigo-500 underline'>Sign in</span>.</button>
      </div>
    </form>
  )
}

export default RegisterUser