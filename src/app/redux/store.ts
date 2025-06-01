import { configureStore } from '@reduxjs/toolkit'
import bookPageReducer from './bookPageSlice/bookPageSlice'
import addCartReducer from './addCartSlice/addCartSlice'

export const store = configureStore({
    reducer: {
        bookPage: bookPageReducer,
        bookCart: addCartReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch