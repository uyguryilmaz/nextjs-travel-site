import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";


export const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email: {label:"Email", type:"text"},
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials){
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password");
                }

                

                const user = await Prisma.user.findUnique({ where: { email: credentials.email } });

                if (!user) {
                    throw new Error("No user found with this email.");
                }

                

                const isPasswordValid = await bcrypt.compare(credentials.password, user.hashedPassword);

                if (!isPasswordValid) {
                    throw new Error("Incorrect password.");
                }

                
                return {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                };
            }

        })
    ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.id;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }
            return token;
        },
        async session({session,token}){
            if (session?.user) {
                session.user.id = token.id;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
                session.user.token = token;
            }
            return session;

        }

    },
    pages:{
        signIn:"/login",
    },
    session:{ strategy: "jwt" },
    secret:process.env.NEXTAUTH_SECRET,

}

export default NextAuth(authOptions);