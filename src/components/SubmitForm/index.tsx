import { useState } from "react";
import store, { Cocktail } from "../../store";
import styles from "./SubmitForm.module.css";
import { createDrink } from "../../store/drinkReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SubmitForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [vendor, setVendor] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addCocktail = (e: any) => {
    e.preventDefault();
    const newCocktail: Cocktail = {
      artist,
      title,
      vendor,
      average: 0,
      id: store.getState().drinks.drinks.length + 1,
      reviews: 0,
      ratings: []
    };
    dispatch(createDrink(newCocktail));
    setTitle("");
    setArtist("");
    setVendor("");
    //setAverage(0);
    setSuccessMsg("Cocktail added successfully.");
    setTimeout(() => {
      setSuccessMsg("")
      navigate('/')
    }, 2000);
  };

  return (
    <div>
      {successMsg && <p className={styles.success}>{successMsg}</p>}
      <form className={styles.container} onSubmit={addCocktail}>
        <label htmlFor="title">What's the name of the cocktail?</label>
        <input
          required
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <label htmlFor="artist">What's the name of the artist?</label>
        <input
          required
          value={artist}
          onChange={({ target }) => setArtist(target.value)}
          type="text"
          name="artist"
          id="artist"
          placeholder="Artist"
        />
        <label htmlFor="vendor">Where can you find it?</label>
        <input
          required
          value={vendor}
          onChange={({ target }) => setVendor(target.value)}
          type="text"
          name="vendor"
          id="vendor"
          placeholder="Vendor"
        />
        <button>Submit Cocktail</button>
      </form>
    </div>
  );
};

export default SubmitForm;
