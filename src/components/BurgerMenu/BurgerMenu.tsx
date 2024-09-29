import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}


export default function BurgerMenu({isMenuOpen, toggleMenu}: BurgerMenuProps) {

    return (
        <button
            type="button"
            className={isMenuOpen ? `${styles["burger-menu"]} ${styles["active"]}` : `${styles["burger-menu"]}`}
            aria-label="Кнопка меню"
            onClick={toggleMenu}
        >
            <span className={styles["burger-menu__bar"]}></span>
            <span className={styles["burger-menu__bar"]}></span>
            <span className={styles["burger-menu__bar"]}></span>
        </button>

    );
}

