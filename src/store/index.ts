import { createStore } from "redux";
import { initialState } from "./data";

export interface Cocktail {
  title: string;
  artist: string;
  vendor: string;
  average: number;
  id: number;
  reviews: number;
  ratings: number[];
}

const cocktailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "NEW_DRINK":
      return [...state, action.payload];
    case 'UPDATE_DRINK': {
      const obj = action.payload.drink
      const rating = action.payload.rating
      const updatedDrink = {
        ...obj,
        ratings: obj.ratings.concat(rating),
        reviews: obj.reviews + 1
      }
      return state.map(drink => drink.id === obj.id ? updatedDrink : drink)
    }
    default:
      return state;
  }
};

const store = createStore(cocktailReducer);

export const createCocktail = (drink: Cocktail) => {
  return {
    type: 'NEW_DRINK',
    payload: drink
  }
}

export const updateCocktail = (drink: Cocktail, rating: number) => {
  return {
    type: 'UPDATE_DRINK',
    payload: {
      drink,
      rating
    }
  }
}

export default store;
