import styles from "./Navigation.module.scss";
import Menu from "../Menu/Menu.tsx";
import Login from "../../molecules/Login/Login.tsx";
import BurgerMenu from "../../molecules/BurgerMenu/BurgerMenu.tsx";
import {useState} from "react";

const user = {
    name: "Johnson Smith"
}
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
            <Login user={user}/>
        </nav>
    )
}