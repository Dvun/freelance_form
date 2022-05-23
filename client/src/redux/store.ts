import { configureStore } from '@reduxjs/toolkit'
import rootState from './rootState'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

export const store = configureStore({
  reducer: rootState
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof rootState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector