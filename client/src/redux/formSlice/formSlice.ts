import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface InitialState {
  isLoading: boolean
}

const initialState: InitialState = {
  isLoading: false
}

const formSlice = createSlice({
  name: 'formState',
  initialState: initialState,
  reducers: {
    
    sendFormDataLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
    
  }
})

export default formSlice.reducer
export const {
  sendFormDataLoading
} = formSlice.actions