'use client'

import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";
import { useThirdPartyLogin } from "@/hooks";
import { Spinner } from "@/components/common";

export default function Page() {
    const [googleAuthenticate] = useSocialAuthenticateMutation();  //return provider, state, code
    useThirdPartyLogin(googleAuthenticate, 'google-oauth2')  //useThirdPartyLogin(authenticate: any, provider: string)


    return(
        <div className='my-8'>
            <Spinner lg/>
        </div>
 
    );
}