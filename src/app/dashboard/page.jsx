import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import DashboardContent from "../components/dashboard/DashboardContent"
import DashboardNavBar from "../components/dashboard/DashboardNavBar"

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user?.name

  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className='w-full h-screen flex flex-col pb-4 px-4 bg-gradient-to-t from-emerald-50 to-white'>
      <div className='w-full leading-tight mb-2 bg-gradient-to-b from-emerald-800 to-emerald-500 bg-clip-text text-transparent'>
        <DashboardNavBar />
        <h1 className='text-3xl -mb-2 font-bold'>Dashboard</h1>
        <p className='text-sm text-emerald-950 font-thin tracking-wide capitalize'>
          {user}
        </p>
      </div>
      <DashboardContent />
    </div>
  )
}

export default Dashboard