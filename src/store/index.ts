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

export default store;
