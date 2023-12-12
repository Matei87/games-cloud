import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch();
export const useThunkDispatch = () => useDispatch();
export const useAppSelector = useSelector;

// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, AppState } from "./store";
// import { AnyAction } from "@reduxjs/toolkit";
// import { Dispatch } from "react";

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = (): Dispatch<any> => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
