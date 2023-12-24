import { CheckCircle } from '@phosphor-icons/react'

const Submitted = () => {
  return (
    <>
      <div className='flex flex-col justify-between bg-emerald-100 py-1 px-2 border border-emerald-800 rounded mt-2 text-xs text-emerald-950'>
        <h1 className='text-2xl font-bold text-emerald-800 pt-4'>Congratulations!</h1>
        <p className='flex flex-wrap text-[1rem] pb-4'>Your loan application has been successfully submitted.</p>

        <hr />

        <p className='pb-4'>Please standby while we process your loan request.</p>
        <p className='pb-4'>If your page does not refresh after 5 minutes,
          <span className='text-indigo-400'>&nbsp;click here.</span></p>
      </div>
      <div className='absolute top-[18.5rem] left-20 w-full opacity-20'>
        <h1><CheckCircle size={150} color='#047857' /></h1>
      </div>
    </>
  )
}

export default Submitted