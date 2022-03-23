import styles from "./Header.module.css";
import logo from "../../../assets/cocktail.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        <h1>Sip N' Review</h1>
        <h3>It's all about feedback!</h3>
      </div>
      <nav className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/new">Submit</Link>
      </nav>
    </header>
  );
};

export default Header;
