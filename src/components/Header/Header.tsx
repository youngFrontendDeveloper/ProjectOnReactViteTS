import styles from "./Header.module.scss"

import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import Container from "../Container/Container.tsx";

export default function Header() {
    return (
        <header className={styles["header"]} id="header">
            <Container extensionClass={styles["header__container"]}>
                <Logo />
                <Navigation />
            </Container>

        </header>
    )
}