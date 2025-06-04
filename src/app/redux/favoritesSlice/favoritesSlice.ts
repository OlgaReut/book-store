import { BookCardType } from '@/app/types/types'
import { createSlice } from '@reduxjs/toolkit'

type FavoritesType = {
  favorites: BookCardType[]
}

const initialState: FavoritesType = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favoritesBooks',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const bookToAdd = action.payload;
      if (!state.favorites.some(book => book.isbn13 === bookToAdd.isbn13)) {
        state.favorites.push(bookToAdd);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(book => book.isbn13 !== action.payload)
    }
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer