import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import LoanRequestPage from "./loan-request/page"
import LandingPage from "./components/LandingPage"
// import TestUser from "./components/TestUser"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className='space-y-2'>
      {/* <h1 className="text-2xl font-bold">Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <h1 className="text-2xl font-bold">Client Call</h1>
      <TestUser /> */}
      <LandingPage />
      {/* <HomePage /> */}
    </div>
  )
}
