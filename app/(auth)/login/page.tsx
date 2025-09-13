"use client";

import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { signIn } from 'next-auth/react';


const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;


const LoginPage = () => {

  const router = useRouter();
  const [error, setError] = useState("")

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "deneme@gmail.com",
      password: "123456",
    },
  });


  const onSubmit = async (data: LoginFormValues) => {
    setError(""); 

    const res = await signIn("credentials",{
      email:data.email,
      password:data.password,
      redirect:false,
    });

    if(res?.error){
      setError("Invalid email or password");
    }else{
      router.push("/")
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-slate-50 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jsmith@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-row items-center justify-between'>
              <Button type="submit">Login</Button>

              <Link
                className="font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/register"
              >
                Register
              </Link>
            </div>

          </form>
        </Form>

      </div>


    </div>
  )
}

export default LoginPage