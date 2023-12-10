import Image from 'next/image'
import Link from 'next/link'
import Pie from '/public/pie.webp'

const DashboardContent = () => {
  return (
    <div>
      <section id='main-content' className='flex flex-col'>
        <div className='flex flex-col space-y-5 my-6'>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Original Loan<Link href='#' className='text-xs text-emerald-700'>&nbsp;&#40; details &#41;</Link></h3>
            <span>$22,500.00</span>
          </div>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Current Balance<Link href='#' className='text-xs text-emerald-700'>&nbsp;&#40; pymnt history &#41;</Link></h3>
            <span>$14,462.89</span>
          </div>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Last Pymnt Amount</h3>
            <span className='text-indigo-700'><Link href='#'>- $285.00</Link>&nbsp;on 12/01/2023</span>
          </div>
          <div>
            <h3 className='text-xl font-semibold flex items-center'>Next Pymnt Date</h3>
            <span>01/12/2024</span>
          </div>
          <h3></h3>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center capitalize'>
            <div className='w-full flex items-center justify-end gap-2'>
              <p className='w-4 h-4 bg-yellow-500' /><span className='text-sm w-full text-emerald-900 font-bold'>payments made</span>
            </div>
            <div className='w-full flex items-center justify-end gap-2'>
              <p className='w-4 h-4 bg-lime-500' /><span className='text-sm w-full text-emerald-900 font-bold'>payments remaining</span>
            </div>
            <div className='w-full flex items-center justify-end gap-2'>
              <p className='w-4 h-4 bg-cyan-400' /><span className='text-sm w-full text-emerald-900 font-bold'>payments missed</span>
            </div>
          </div>
        </div>

        <div className='flex items-center w-full'>
          <Image
            src={Pie}
            alt='pie-chart'
            width={250}
            height={250}
            className='w-full p-4'
          />
        </div>
      </section>
    </div>
  )
}

export default DashboardContent