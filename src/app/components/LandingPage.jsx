import { LoginButton, SignUpButton } from "./Auth"

const LandingPage = () => {
  return (
    <div className='w-full h-screen flex flex-col py-12 px-4'>
      <div className='w-4/5 leading-tight mb-6 bg-gradient-to-b from-emerald-800 to-emerald-500 bg-clip-text text-transparent'>
        <h1 className='text-3xl text-emerald-800 font-bold capitalize'>Working Title
        </h1>
        <h2 className='text-2xl font-semibold'>A Subtitle Here</h2>
        <p className=''>A brief description that would be about three lines for the mobile view.</p>
      </div>
      <div className='w-full flex border-t border-b border-emerald-800 bg-emerald-50'>
        <div className='mx-auto flex gap-32 w-full my-6'>
          <ul className='flex flex-col items-end w-1/2 list-disc'>
            <li>service</li>
            <li>service</li>
            <li>service</li>
          </ul>
          <ul className='flex flex-col items-start w-1/2 list-disc'>
            <li>service</li>
            <li>service</li>
            <li>service</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between w-full p-6'>
        <LoginButton />
        <SignUpButton />
      </div>
    </div>
  )
}

export default LandingPage