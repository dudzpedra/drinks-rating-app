import styles from './Details.module.css'

const Details: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p>average rating</p>
        <p>[qtd] reviews</p>
      </div>
      <div className={styles.row}>
        <p>nome do drink</p>
        <p>autor do drink</p>
      </div>
    </div>
  );
};

export default Details;
