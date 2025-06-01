import { BookCardType } from '@/app/types/types'
import { createSlice } from '@reduxjs/toolkit'

type AddCartType = {
  addedBook: BookCardType[]
}

const initialState: AddCartType = {
  addedBook: []
}

export const addCartSlice = createSlice({
  name: 'bookCart',
  initialState,
  reducers: {
    openAddedBook: (state, action) => {
      const bookToAdd = action.payload;
      if (!state.addedBook.some(book => book.isbn13 === bookToAdd.isbn13)) {
        state.addedBook.push(bookToAdd);
      }
    }
  },
})

export const { openAddedBook } = addCartSlice.actions

export default addCartSlice.reducer