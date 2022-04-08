import { initialState } from "./data";
import { Cocktail } from ".";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll } from "../services/drinks";

export const fetchDrinks = createAsyncThunk('fetchDrinks', async () => {
  return await getAll()
})

const drinkSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {
    addDrink(state, action) {
      state.drinks.push(action.payload);
    },
    updateDrink(state, action) {
      const { drink, rating } = action.payload;
      const newDrink = state.drinks.find((d) => d.id === drink.id);
      if (newDrink) {
        newDrink.reviews++;
        newDrink.ratings.push(rating);
        newDrink.average =
          newDrink.ratings.reduce((sum, r) => sum + r, 0) / newDrink.reviews;
      }
    }
  },
  extraReducers: {
    [fetchDrinks.fulfilled.type]: (state, action) => {
      state.drinks = action.payload
    }
  }
});

export const { addDrink, updateDrink } = drinkSlice.actions;

export const createDrink = (drink: Cocktail) => {
  return (dispatch: any) => dispatch(addDrink(drink));
};

export const updateCocktail = (drink: Cocktail, rating: number) => {
  return (dispatch: any) => dispatch(updateDrink({ drink, rating }));
};

export default drinkSlice.reducer;
