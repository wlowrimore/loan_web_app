import Image from 'next/image'
import Hero from 'public/hero.webp'
import LoanRequestForm from '../components/forms/LoanRequestForm'

const HomePage = () => {
  return (
    <div className='w-full flex flex-col items-center px-4'>
      <h1 className='text-center text-4xl text-emerald-800 font-bold capitalize mb-12'>We&apos;re here to help</h1>
      <div className='w-full h-[1rem] border border-emerald-800 rounded-xl'>
        <div className='w-1/3 h-full bg-emerald-400 rounded-r-xl' />
      </div>
      <LoanRequestForm />
      <div className='fixed z-[-1] left-1.5 top-72 justify-center opacity-80 w-full'>
        <Image
          src={Hero}
          alt='handshake'
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}

export default HomePage