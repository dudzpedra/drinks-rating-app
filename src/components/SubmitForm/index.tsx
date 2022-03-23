import { useState } from "react";
import store, { Cocktail } from "../../store";
import styles from "./SubmitForm.module.css";

const SubmitForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [vendor, setVendor] = useState("");
  const [rating, setRating] = useState(0);
  const [successMsg, setSuccessMsg] = useState("");

  const addCocktail = (e: any) => {
    e.preventDefault();
    const newCocktail: Cocktail = {
      artist,
      title,
      vendor,
      rating,
      id: store.getState().length + 1,
    };
    store.dispatch({
      type: "NEW_DRINK",
      payload: newCocktail,
    });
    setTitle("");
    setArtist("");
    setVendor("");
    setRating(0);
    setSuccessMsg("Cocktail added successfully.");
    setTimeout(() => setSuccessMsg(""), 3000);
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
        <label htmlFor="rating">What's the rating (0 to 5)?</label>
        <input
          required
          min={0}
          max={5}
          value={rating}
          onChange={({ target }) => setRating(Number(target.value))}
          type="number"
          name="rating"
          id="rating"
          placeholder="rating"
        />
        <button>Submit Cocktail</button>
      </form>
    </div>
  );
};

export default SubmitForm;
