import Image from 'next/image'
import Logo from '/public/eagle-logo.webp'

const Loading = () => {
  return (
    <div className='bg-emerald-50 w-screen h-screen mx-auto flex justify-center items-center p-4'>
      <div className="loader"></div>
      <div className='flex flex-col absolute items-center justify-center -space-y-5'>
        <Image
          src={Logo}
          width={100}
          height={100}
          alt='eagle silhouette'
        />
        <p className='text-emerald-800 font-bold tracking-wider'>ALG</p>
      </div>
    </div>
  )
}

export default Loading