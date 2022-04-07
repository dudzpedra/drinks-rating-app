import styles from "./Header.module.css";
import logo from "../../../assets/cocktail.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.subContainer}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={styles.title}>
          <h3>Sip N' Review</h3>
        </div>
        <nav className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/new">Submit</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
