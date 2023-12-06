"use client"

import { useSession } from "next-auth/react"


const TestUser = () => {
  const { data: session } = useSession();
  return (
    <pre>{JSON.stringify(session)}</pre>
  )
}

export default TestUser