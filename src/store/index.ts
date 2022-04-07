import { configureStore } from '@reduxjs/toolkit'
import drinkReducer from './drinkReducer'
export interface Cocktail {
  title: string;
  artist: string;
  vendor: string;
  average: number;
  id: number;
  reviews: number;
  ratings: number[];
}

const store = configureStore({
  reducer: {
    drinks: drinkReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
