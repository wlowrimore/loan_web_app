// import HomePage from "./home/page";

import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import TestPage from "./Test/page"
import HomePage from "./home/page"
import TestUser from "./components/TestUser"
import { LoginButton, LogoutButton } from "./components/Auth"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className='py-12 space-y-2'>
      <div className='flex gap-2'>
        <LoginButton />
        <LogoutButton />
      </div>
      <h1 className="text-2xl font-bold">Server Session</h1>
      <pre>{JSON.stringify(session)}</pre>
      <h1 className="text-2xl font-bold">Client Call</h1>
      <TestUser />
      {/* <TestPage /> */}
      {/* <HomePage /> */}
    </div>
  )
}
