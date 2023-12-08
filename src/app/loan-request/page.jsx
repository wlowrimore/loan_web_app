import Image from 'next/image'
import Hero from 'public/hero.webp'
import LoanRequestForm from '../components/forms/LoanRequestForm'
import PageHeader from '../components/PageHeader'

const LoanRequestPage = () => {
  return (
    <div className='w-full flex flex-col items-center px-4 pb-6'>
      <PageHeader />
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

export default LoanRequestPage