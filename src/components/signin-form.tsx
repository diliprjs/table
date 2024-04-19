"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const SigninformSchema = z.object({
  email: z.string().min(1, "Required!"),
  password: z.string().min(1, "Required!"),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof SigninformSchema>>({
    resolver: zodResolver(SigninformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const router = useRouter();



  async function onSubmit(values: z.infer<typeof SigninformSchema>) {

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(values),
    });


    const data = await response.json();
    console.log(response)

    // Assuming data contains an error message from the server
    if (response.status == 200) {
      toast({ title: data.message });
      router.push("/");
    }
    else { toast({ title: data.message, variant: "destructive" }) }


  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-serif w-2/3">
        <h2 className="text-4xl font-serif font-medium">Welcome back</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" >
          {form.formState.isSubmitting && (
            <Loader2Icon className="mr-2 animate-spin" />
          )}
          Sign-in
        </Button>

        <span className="mt-6 font-serif">
          You dont have an account?
          <Link href={"/auth/sign-up"}>
            <Button variant={"link"}>Create Account</Button>
          </Link>
        </span>
      </form>
    </Form>
  );
}