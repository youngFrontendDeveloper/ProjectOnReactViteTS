import styles from "./Header.module.scss"

import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import Container from "../Container/Container.tsx";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className={styles["header"]} id="header">
            <Container extensionClass={styles["header__container"]}>
                <Link to="/#catalog" className="visually-hidden">Перейти к основному контенту</Link>
                <Logo />
                <Navigation />
            </Container>

        </header>
    )
}