import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.credits}>
      <p>Developed by</p>
      <p>
        <a href="https://github.com/dudzpedra" target="_blank" rel="noreferrer">
          dudzpedra
        </a>
      </p>
    </footer>
  );
};

export default Footer;
