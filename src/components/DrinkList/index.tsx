import styles from "./DrinkList.module.css";
import Card from "../Card";
import store, { Cocktail } from "../../store";
import Avatar from "../ui/Avatar";
import Details from "../Details";
import { useState } from "react";
import { updateCocktail } from "../../store";

const DrinkList = () => {
  const drinks = store.getState();

  const [newRating, setNewRating] = useState('');

  const handleRating = (drink: Cocktail): void => {
    if (newRating) {
      store.dispatch(updateCocktail(drink, Number(newRating)));
      setNewRating('')
    } else {
      alert('Please choose a rating between 0 and 5 stars')
    }
  };
  return (
    <div>
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
      <div className={styles.grid}>
        {drinks.map((drink) => (
          <Card key={drink.id}>
            <Avatar />
            <Details drink={drink} />
            <button onClick={() => handleRating(drink)}>Update Rating</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DrinkList;
