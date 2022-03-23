import { Cocktail } from '../../store';
import styles from './Details.module.css'

type DetailsProps = {
    drink: Cocktail
}

const Details = ({ drink }: DetailsProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p>average rating: {drink.rating}</p>
        <p>[qtd] reviews</p>
      </div>
      <div className={styles.row}>
        <p>{drink.title}, by {drink.artist}</p>
        <p>{drink.vendor}</p>
      </div>
    </div>
  );
};

export default Details;
