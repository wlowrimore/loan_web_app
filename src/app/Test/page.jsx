import { prisma } from "../../../lib/prisma"


const TestPage = async () => {
  const user = await prisma.user.findFirst({
    where: {
      email: 'test@test.com'
    }
  })

  return (
    <div>Hello, Mr. {user?.lastName}</div>
  )
}

export default TestPage