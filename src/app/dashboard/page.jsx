import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import DashboardContent from "../components/dashboard/DashboardContent"
import DashboardNavBar from "../components/dashboard/DashboardNavBar"
import { wait } from "../utils/wait"

const Dashboard = async () => {
  await wait(2000)
  const session = await getServerSession(authOptions)
  const user = session?.user?.name

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className='w-full h-full flex flex-col pb-4 px-4 bg-gradient-to-t from-green-800 to-white'>
      <div className='w-full leading-tight mb-2 bg-gradient-to-b from-emerald-800 to-emerald-500 bg-clip-text text-transparent'>
        <DashboardNavBar />
        <div className='bg-emerald-800 -mx-4 px-4 border-b border-emerald-800 shadow-lg'>
          <h1 className='text-3xl text-emerald-100 -mb-2 py-2 font-bold'>Dashboard</h1>
          <p className='text-emerald-950 font-semibold pt-2 pb-1 rounded-tl-xl bg-emerald-400/50 -mr-4 ml-16 pl-3 tracking-wider capitalize'>
            {user}
          </p>
        </div>
      </div>
      <DashboardContent />
    </div>
  )
}

export default Dashboard