import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import LandingPage from "./components/LandingPage"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <LandingPage />
    </div>
  )
}
