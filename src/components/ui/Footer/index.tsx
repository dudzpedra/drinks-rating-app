import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.credits}>
      <p>
        Developed by
        <a href="https://github.com/dudzpedra" target="_blank" rel="noreferrer">
          dudzpedra
        </a>
      </p>
      <div>
        <a
          href="https://www.flaticon.com/free-icons/cocktail"
          title="cocktail icons"
        >
          Cocktail icons created by Vitaly Gorbachev - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
