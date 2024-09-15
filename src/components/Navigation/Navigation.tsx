import styles from "./Navigation.module.scss";
import Menu from "../Menu/Menu.tsx";
import Login from "../Login/Login.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import {useState} from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    }

    return (
        <nav className={styles["nav"]}>
            <Menu isHeader={true} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Login />
        </nav>
    )
}