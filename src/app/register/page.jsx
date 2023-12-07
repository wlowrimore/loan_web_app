import React from 'react'
import RegisterUser from '../components/forms/RegisterUser'

const RegisterPage = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='shadow-xl w-full mx-4 pb-1 md:w-1/3'>
        <RegisterUser />
      </div>
    </div>
  )
}

export default RegisterPage