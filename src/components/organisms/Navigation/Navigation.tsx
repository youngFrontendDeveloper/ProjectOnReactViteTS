import styles from "./Navigation.module.scss";
import Menu from "../Menu/Menu";
import Login from "../../molecules/Login/Login";
import BurgerMenu from "../../molecules/BurgerMenu/BurgerMenu";
import {useState} from "react";
import { useAppSelector } from "../../../redux/hooks";


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