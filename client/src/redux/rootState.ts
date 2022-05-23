import {combineReducers} from '@reduxjs/toolkit'
import formSlice from './formSlice/formSlice'

const rootState = combineReducers({
  formSlice: formSlice
})

export default rootState