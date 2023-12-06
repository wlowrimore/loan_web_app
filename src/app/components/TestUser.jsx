'use client'

import { useSession } from "next-auth/react"

const TestUser = () => {
  const { data: session } = useSession()
  console.log('Client Session', session)
  return (
    <pre>{JSON.stringify(session)}</pre>
  )
}

export default TestUser