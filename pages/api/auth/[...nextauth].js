import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 10000, // 将超时时间增加到 10 秒
      },
      authorization: {
        params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
        }
    }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // 用于加密 JWT
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // 让 session 里包含用户 ID
      return session;
    },
  },
};

export default NextAuth(authOptions);