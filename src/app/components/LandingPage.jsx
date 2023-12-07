import { getServerSession } from "next-auth"
import { LoginButton, SignUpButton } from "./Auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Image from "next/image"
import Hero from '/public/smile_cust_srvc.webp'

const LandingPage = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='w-full h-screen flex flex-col pt-8 pb-4 px-4 bg-gradient-to-t from-emerald-50 to-white'>
      <div className='w-full leading-tight mb-6 bg-gradient-to-b from-emerald-800 to-emerald-500 bg-clip-text text-transparent'>
        <h1 className='text-4xl -mb-1 text-emerald-800 font-bold capitalize'>Ascension Lending Group
        </h1>
        <h2 className='text-2xl font-semibold'>Rising Above and Beyond</h2>
        <p className='text-lg leading-tight'>Leveraging modern technologies and cutting edge algorithms to assure the fairest options and intrest rates for our clients.</p>
      </div>
      <div className='w-full h-screen flex flex-col'>
        <Image
          src={Hero}
          alt='customer service with a smile'
          width={500}
          height={500}
          className='opacity-90 rounded-lg border shadow-lg'
        />
        <div className='flex flex-col space-y-2 pt-12 px-4 mx-auto'>
          <p>Create Your Account To Get Started</p>
          <div className='flex items-center gap-2'>
            <div className='w-full bg-emerald-800 h-[1px]' />
            <div className='text-sm'>OR</div>
            <div className='w-full bg-emerald-800 h-[1px]' />
          </div>
          <p className='text-center'>Sign In To Your Existing Account</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage