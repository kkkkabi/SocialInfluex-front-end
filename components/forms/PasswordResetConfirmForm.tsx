'use client'

import { useResetPasswordConfirm } from "@/hooks"
import { Form } from '@/components/forms'

interface Props {
        uid:string;
        token: string;
}

export default function useResetPasswordConfirmForm({ uid, token}:Props){

    const{new_password, re_new_password, isLoading, onChange, onSubmit} =useResetPasswordConfirm(uid, token);
    const config = [
        {
            labelText: 'New Password',
            labelId: 'new_password',
            type: 'password',
            onchange,
            value: new_password,
            require: true
        },
        {
            labelText: 'Confirm New Password',
            labelId: 're_new_password',
            type: 'password',
            onchange,
            value: re_new_password,
            require: true
        },
    ]
    
    return(
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Request password reset'
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}