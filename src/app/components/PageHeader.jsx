import Image from "next/image"
import Logo from 'public/header-logo.svg'

const PageHeader = () => {
  return (
    <div className='h-full flex flex-col'>
      <div className='pt-8 pb-12 gap-2 flex items-center'>
        <Image
          src={Logo}
          alt='circled check mark'
          width={60}
          height={60}
        />
        <div className='flex flex-col leading-tight'>
          <h1 className='text-2xl font-bold text-emerald-800'>Ascension Lending Group</h1>
          <h2 className='text-sm text-emerald-600 tracking-wide font-semibold'>Going Above and Beyond</h2>
        </div>
      </div>
    </div>
  )
}

export default PageHeader