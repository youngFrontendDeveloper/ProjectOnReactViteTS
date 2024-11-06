import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../../atoms/Logo/Logo";
import Container from "../../templates/Container/Container";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Container extensionClass={styles["header__container"]}>
        <Link to="/#catalog" className="visually-hidden">
          Go to the main content
        </Link>
        <Logo />
        <Navigation />
      </Container>
    </header>
  );
}
