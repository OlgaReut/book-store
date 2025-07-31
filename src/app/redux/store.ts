import { configureStore } from '@reduxjs/toolkit'
import bookPageReducer from './bookPageSlice/bookPageSlice'
import addCartReducer from './addCartSlice/addCartSlice'
import favoritesReducer from './favoritesSlice/favoritesSlice'
import profileReducer from './profileSlice/profileSlice'

export const store = configureStore({
    reducer: {
        bookPage: bookPageReducer,
        bookCart: addCartReducer,
        favoritesBooks: favoritesReducer,
        profile: profileReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch