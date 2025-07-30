// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        phone: { label: 'Phone', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { phone, password } = credentials!;
        if (phone === '9866146520' && password === 'password') {
          return {
            id: '1',
            name: 'Bishal',
            email: 'bishal@example.com',
            image: '/default.png',
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        return {
          ...session,
          user: { ...session.user, id: token.sub! },
        };
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };