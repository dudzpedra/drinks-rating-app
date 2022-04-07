import { initialState } from "./data";
import { Cocktail } from ".";
import { createSlice } from "@reduxjs/toolkit";

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addDrink(state, action) {
      state.push(action.payload);
    },
    updateDrink(state, action) {
      const { drink, rating } = action.payload;
      const newDrink = state.find((d) => d.id === drink.id);
      if (newDrink) {
        newDrink.reviews++;
        newDrink.ratings.push(rating);
        newDrink.average =
          newDrink.ratings.reduce((sum, r) => sum + r, 0) / newDrink.reviews;
      }
    },
  },
});

export const { addDrink, updateDrink } = drinkSlice.actions;

export const createDrink = (drink: Cocktail) => {
  return (dispatch: any) => dispatch(addDrink(drink));
};

export const updateCocktail = (drink: Cocktail, rating: number) => {
  return (dispatch: any) => dispatch(updateDrink({ drink, rating }));
};

export default drinkSlice.reducer;
