import styles from "./Footer.module.scss";
import Menu from "../Menu/Menu.tsx";
import Logo from "../Logo/Logo.tsx";
import Container from "../Container/Container.tsx";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <Container extensionClass={styles["footer__container"]}>
                <Logo />
                <Menu isHeader={false} extensionClass={styles["footer__menu"]} />
            </Container>
        </footer>
    )
}