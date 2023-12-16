import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/eagle-logo.webp'
import { LoginButton, LogoutButton, SignUpButton } from './Auth'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

const MobileHeader = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user?.name

  return (
    <div className='bg-emerald-50 border-b border-emerald-400 flex pt-6 pb-1 px-4 md:px-12 justify-between items-end'>
      <div className='flex items-end gap-2 w-full'>
        <Link href='/' className='mb-1'>
          <Image
            src={Logo}
            alt='eagle-silhouette'
            width={28}
            height={28}
          />
        </Link>
        <span className='text-xl flex items-end'>|</span>
        {session ? (
          <div className='flex w-full'>
            <p className='flex items-end justify-between w-full text-sm'><Link href='/dashboard'>{user}</Link>
              <span className='text-emerald-600'><LogoutButton /></span>
            </p>
          </div>
        ) : (
          <span className='text-sm'>
            <LoginButton />
          </span>
        )}
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-800/70">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg> */}
    </div>
  )
}

export default MobileHeader