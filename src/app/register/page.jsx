import React from 'react'
import RegisterUser from '../components/forms/RegisterUser'
import PageHeader from '../components/PageHeader'

const RegisterPage = () => {
  return (
    <div className='h-full w-screen flex flex-col items-center mt-[1.5rem] px-4'>
      <PageHeader />
      <div className='shadow-xl w-full mx-4 pb-1 md:w-1/3'>
        <RegisterUser />
      </div>
    </div>
  )
}

export default RegisterPage