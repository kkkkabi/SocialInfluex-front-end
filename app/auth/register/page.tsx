import Link from "next/link";
import { RegisterForm } from "@/components/forms";
import type { Metadata } from "next";
import { SocialButtons } from "@/components/common";

export const metadata: Metadata = {
  title: 'SocialInfluex | Register',
  description: 'SocialInfluex register page'
}


export default function Page() {

    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="SocialInfluex"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <RegisterForm/>
          <SocialButtons/>

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link 
            href='/auth/login' 
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login here
            </Link>
          </p>
        </div>
      </div>
    );
}