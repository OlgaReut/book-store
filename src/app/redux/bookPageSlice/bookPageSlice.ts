import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedBook: []
}

export const bookPageSlice = createSlice({
  name: 'bookPage',
  initialState,
  reducers: {
    openSelectedBook: (state, action) => {
      state.selectedBook = action.payload
    }
  },
})

export const { openSelectedBook } = bookPageSlice.actions

export default bookPageSlice.reducer