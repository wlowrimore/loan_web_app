import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/eagle-logo.webp'
import { LoginButton, LogoutButton, SignUpButton } from './Auth'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

const MobileHeader = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user?.name

  return (

    <div className='bg-emerald-50 border-b border-emerald-400 flex pt-4 pb-1 px-4 md:px-12 justify-between items-end'>
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
    </div>
  )
}

export default MobileHeader