import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../../lib/prisma";
import { compare } from "bcrypt";

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      typ: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            console.error(error);
            return null
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })

          if (!user) {
            return null
          }

          const isPasswordValid = await compare(
            credentials.password,
            user.password
          )

          if (!isPasswordValid) {
            return null
          }

          return {
            id: user.id + '',
            email: user.email,
            name: user.name,
            randomKey: 'Jazz'
          }
        } catch (error) {
          console.error('Unexpected error during authentication', error)
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    session: ({ session, token }) => {
      console.log('SESSION CALLBACK:', { token, session })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
      return session
    },
    jwt: ({ token, user }) => {
      console.log('JWT CALLBACK:', { token, user })
      if (user) {
        const u = user
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }