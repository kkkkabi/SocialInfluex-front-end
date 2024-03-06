//this is client component
'use client';

// we import from react redux and will be used inside layout

import { makeStore } from "./store";
import { Provider } from 'react-redux';

interface Props{
    children: React.ReactNode;
}

export default function CustomProvider({children}:Props) {
    return <Provider store = {makeStore()}>{children} </Provider>;
}
