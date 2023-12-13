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
    <form onSubmit={handleFormSubmit} className='flex flex-col space-y-4 pt-2 pb-4 px-3 mt-4 w-full bg-emerald-800 rounded-lg'>
      <h1 className='text-xl font-bold text-emerald-200 mt-2'>Create Your Account</h1>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        id='name'
        placeholder='Full Name'
        className='w-full h-[2rem] text-neutral-800 text-lg px-2 outline-none placeholder:text-emerald-800 focus:placeholder:text-emerald-950 focus:placeholder:opacity-70 focus:placeholder:translate-x-[16.5rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />

      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        id='email'
        placeholder='Email'
        className='w-full h-[2rem] text-neutral-800 text-lg px-2 outline-none placeholder:text-emerald-800 focus:placeholder:text-emerald-950 focus:placeholder:opacity-70 focus:placeholder:translate-x-[18rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />

      <input
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        id='password'
        placeholder='Password'
        className='w-full h-[2rem] text-neutral-800 text-lg px-2 outline-none placeholder:text-emerald-800 focus:placeholder:text-emerald-950 focus:placeholder:opacity-70 focus:placeholder:translate-x-[16.5rem] focus:placeholder:text-xs focus:placeholder:transition focus:placeholder:duration-[600ms] focus:placeholder:ease-out'
      />
      {error && <Alert>{error}</Alert>}
      <button className='w-full bg-emerald-300 font-bold py-2 px-6 rounded outline-none'>Create Account</button>
      <div className='text-center'>
        <button onClick={(e) => signIn()} className='text-sm text-white'>Already registered? <span className='text-cyan-400'>Sign in</span>.</button>
      </div>
    </form>
  )
}

export default RegisterUser