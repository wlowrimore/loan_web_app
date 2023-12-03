import Image from 'next/image'
import Hero from 'public/hero.webp'

const HomePage = () => {
  return (
    <div className='w-full flex flex-col items-center px-4'>
      <h1 className='text-center text-4xl text-emerald-800 font-bold capitalize mb-12'>We&apos;re here to help</h1>
      <div className='w-full h-[1rem] border border-emerald-800 rounded-xl'>
        <div className='w-1/3 h-full bg-emerald-400 rounded-r-xl' />
      </div>
      <section className='w-full border border-emerald-800 rounded bg-green-100/40 py-6 px-4 mt-8'>
        <form className='flex flex-col justify-center'>
          <h2 className='text-2xl text-emerald-800 font-bold mb-4'>What Are Your Needs?</h2>
          <p className='font-bold text-md text-emerald-800 tracking-wide'>Requested Amount</p>
          <div className='flex items-center'>
            <span className='border-t border-b border-l border-emerald-800 rounded-tl rounded-bl bg-white py-1 px-2 outline-none'>
              $
            </span>
            <input
              type='number'
              className='w-full py-1 pr-2 border-t border-b border-r border-emerald-800 rounded-tr rounded-br outline-none'
            />
          </div>
          <div className='mt-4 w-full'>
            <p className='font-bold text-md text-emerald-800 tracking-wide'>Reason For Loan</p>
            <select name='loan' id='loan-select' className='w-full py-1 px-2 border border-emerald-800 rounded outline-none bg-white'>
              <option value='reason'>-- Choose an Option --</option>
              <option value='home'>Home</option>
              <option value='auto'>Auto</option>
              <option value='school'>School</option>
              <option value='extra-funds'>Extra Funds</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div className='flex gap-1 items-center mt-2 mx-auto'>
            <input type='checkbox' id='terms' name='terms' checked className='mb-1' />
            <span className='text-sm'>I Agree to &#40;company&apos;s&#41; Terms and Conditions.</span>
          </div>
          <div className='w-full text-end'>
            <button className='w-fit py-2 px-4 border border-emerald-800 rounded bg-emerald-500/50 text-lg text-emerald-800 font-bold tracking-wide mt-8 mb-2'>
              Continue
            </button>
          </div>
        </form>
      </section>

      <section className='flex justify-between w-full border border-emerald-800 rounded bg-green-100/40 py-3 px-4 mt-2'>
        <ul className='flex flex-col space-y-2 text-neutral-700 text-sm'>
          <li>Privacy Policy</li>
          <li>Responsible Lending</li>
          <li>Rates & Fees</li>
        </ul>
        <ul className='flex flex-col space-y-2 text-neutral-700 text-sm'>
          <li>Disclaimer</li>
          <li>Marketing Practices</li>
          <li>Terms of Use</li>
        </ul>
      </section>
      <div className='absolute z-[-1] top-72 justify-center opacity-80'>
        <Image
          src={Hero}
          alt='handshake'
          width={400}
          height={400}
        />

      </div>
    </div>
  )
}

export default HomePage