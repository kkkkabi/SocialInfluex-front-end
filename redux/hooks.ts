import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux/es/types";
import type { RootState, AppDispatch } from "./store";
import exp from "constants";

export const useAppDispatch: () => AppDispatch = useDispatch; 
//anytime i want to use dispatch, we don't use typescript. we import useDispatch from react-redux, 
//and then you could dispatch your action creators but with typescript instead, we are goin to use UseAppDispatch
//that will just give us some typing when we are doing dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;