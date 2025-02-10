import { login, signInWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // Type
      type: "credentials",
      name: "Credentials",
      // Form Sign in
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // When Clicking Sign In
      async authorize(credentials) {
        // Catch all input in the form
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Assign as user
        const user: unknown = await login({ email });

        if (user) {
          const passwordConfirm = await compare(password, user.password);

          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OUATH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OUATH_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/Auth/Login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          type: "google",
        };

        await signInWithGoogle(
          data,
          (result: { status: boolean; message: string; data: unknown }) => {
            if (result.status) {
              token.fullname = result.data.fullname;
              token.email = result.data.email;
              token.type = result.data.type;
              token.image = result.data.image;
              token.role = result.data.role;
            }
          },
        );
      }

      return token;
    },

    // token(user form output) dikirim ke session
    async session({ session, token }: unknown) {
      if ("email" in token) {
        session.user.email = token.email;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }

      if ("role" in token) {
        session.user.role = token.role;
      }

      if ("image" in token) {
        session.user.image = token.image;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
