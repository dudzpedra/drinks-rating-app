import styles from "./DrinkList.module.css";
import Card from "../Card";
import store, { Cocktail } from "../../store";
import Avatar from "../ui/Avatar";
import Details from "../Details";
import { useEffect, useState } from "react";
import { fetchDrinks, updateCocktail } from "../../store/drinkReducer";
import { useDispatch } from "react-redux";

const DrinkList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDrinks())
  }, [dispatch])

  const drinks = store.getState().drinks.drinks;

  const [newRating, setNewRating] = useState("");

  const handleRating = (drink: Cocktail): void => {
    if (newRating) {
      dispatch(updateCocktail(drink, Number(newRating)));
      setNewRating("");
    } else {
      alert("Please choose a rating between 0 and 5 stars");
    }
  };
  return (
    <div>
      <div className={styles.rating}>
        <label htmlFor="rating">Enter a new rating:</label>
        <input
          type="number"
          name="rating"
          id="rating"
          min={0}
          max={5}
          value={newRating}
          onChange={({ target }) => setNewRating(target.value)}
        />
      </div>
      <div className={styles.grid}>
        {drinks.map((drink: Cocktail) => (
          <Card key={drink.id}>
            <Avatar />
            <Details drink={drink} onClick={() => handleRating(drink)} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DrinkList;
