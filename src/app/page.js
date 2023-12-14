import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import LandingPage from "./components/LandingPage"
import { wait } from "./utils/wait"

export default async function Home() {
  await wait(2000)
  const session = await getServerSession(authOptions)

  return (
    <div>
      <LandingPage />
    </div>
  )
}
