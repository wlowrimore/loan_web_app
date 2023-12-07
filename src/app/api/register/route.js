import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"

export async function POST(req) {

  const { email, password, name } = await req.json()
  const hashed = await hash(password, 12)
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name
      }
    })
    return NextResponse.json({
      user: {
        email: user.email,
      }
    })
  } catch (error) {
    console.error('Error creating user:', error)
    return new NextResponse(JSON.stringify({
      error: error.message
    }),
      {
        status: 500
      }
    )
  }
}