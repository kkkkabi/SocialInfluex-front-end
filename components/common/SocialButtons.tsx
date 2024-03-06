'use client'

import { ImGoogle, ImFacebook} from 'react-icons/im'
import { SocialButtonStyle } from '@/components/common'
import { continueWithGoogle, continueWithFacebook } from '@/utils'

export default function SocialButtons(){
    return(
        <div className= 'flex justify-between items-center gap-2 mt-5'>
            <SocialButtonStyle provider='google' onClick = {continueWithGoogle}>
                <ImGoogle className='mr-3' /> Sign in with Google
            </SocialButtonStyle>

            <SocialButtonStyle provider='facebook' onClick = {continueWithFacebook}>
                <ImFacebook className='mr-3'/> Sign in with Facebook
            </SocialButtonStyle>
        </div>
    )
}