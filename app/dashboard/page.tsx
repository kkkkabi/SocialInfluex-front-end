'use client'

import { useRouter } from "next/navigation";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { List, Spinner } from "@/components/common";
import { toast } from "react-toastify";

export default function Page() {

    const router = useRouter();
    const { data: user, isLoading, isError } = useRetrieveUserQuery();

    const config = [
        {
            label: 'First Name',
            value: user?.first_name,
        },
        {
            label: 'Last Name',
            value: user?.last_name,
        },
        {
            label: 'Email',
            value: user?.email,
        },
    ];

    if (isLoading){
        return(
            <div className="flex justify-center my-8">
                <Spinner lg/>
            </div>
        );
    }

    if (isError){
        router.push('/auth/login/')
        toast.error('Please log in')
    }

    return(
        <>
			<header className='bg-white shadow'>
				<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						Dashboard
					</h1>
				</div>
			</header>
			<main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>
                {user && <List config={config} />}
			</main>
		</>
    );
}