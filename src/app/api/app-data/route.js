import { getServerSession } from "next-auth";
import { prisma } from "../../../../lib/prisma";

export default async function handler(req, res) {
  const session = getServerSession({ req })

  if (!session || !session.user || !session.user.id) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const userId = session?.user?.id
  console.log("USER ID FROM API:", userId)

  try {
    const userData = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        personalInfo: true,
        employmentInfo: true,
        financialInfo: true,
        loanDetailsInfo: true,
      }
    })
    console.log(userData)
  } catch (error) {
    console.error('Error fetching user dat:', error)
  }
}


