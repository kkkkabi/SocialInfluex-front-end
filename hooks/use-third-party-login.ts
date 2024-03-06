// hook used to log in with google and facebook account.

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "react-toastify";


export default function useThirdPartyLogin(
    authenticate: any, 
    provider: string, 
){

    const dispatch= useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams(); //useSearchParams is to look up the value of query parameters

    const effectRan = useRef(false);

    useEffect(()=>{
        const state = searchParams.get('state');
        const code = searchParams.get('code');

        if (state && code && !effectRan.current) {
            authenticate({ provider, code, state})
            .unwrap()
            .then(()=> {
                dispatch(setAuth());
                toast.success('Logged in');
                router.push('/dashboard');
            })
            .catch(()=>{
                toast.error('Failed to log in');
                router.push('/auth/login');
            })
        }

        return ()=>{
            effectRan.current = true; //ensure the code run only once
        }

    }, [authenticate, provider]);

}