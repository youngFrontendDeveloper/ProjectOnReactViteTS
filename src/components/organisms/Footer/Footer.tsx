import styles from "./Footer.module.scss";
import Menu from "../Menu/Menu";
import Logo from "../../atoms/Logo/Logo";
import Container from "../../templates/Container/Container";

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