import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
          clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string
        }),
      ],
    adapter: MongoDBAdapter(clientPromise),
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}