import { MouseEventHandler, useEffect } from 'react';
import { Cocktail } from '../../store';
import styles from './Details.module.css'

type DetailsProps = {
    drink: Cocktail,
    onClick: MouseEventHandler
}

const Details = ({ drink, onClick }: DetailsProps) => {
  useEffect(() => {
    
  }, [])

  const labelToShow = drink.reviews === 1 ? 'review' : 'reviews'
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p>Rating: {drink.average | 0}</p>
        <p>{drink.reviews}{' '}{labelToShow}</p>
      </div>
      <div className={styles.row}>
        <p>{drink.title}, by {drink.artist}</p>
        <p>{drink.vendor}</p>
      </div>
      <button onClick={onClick}>Update Rating</button>
    </div>
  );
};

export default Details;
