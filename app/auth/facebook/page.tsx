'use client'

import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";
import { useThirdPartyLogin } from "@/hooks";
import { Spinner } from "@/components/common";

export default function Page() {
    const [facebookAuthenticate] = useSocialAuthenticateMutation();  //return provider, state, code
    useThirdPartyLogin(facebookAuthenticate, 'facebook')  //useThirdPartyLogin(authenticate: any, provider: string)


    return(
        <div className='my-8'>
            <Spinner lg/>
        </div>
 
    );
}