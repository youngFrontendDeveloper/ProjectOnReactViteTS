import styles from "./Menu.module.scss"
import {Link} from "react-router-dom"
import CartIcon from "../CartIcon/CartIcon.tsx";

interface MenuProps {
    isHeader: boolean;
    extensionClass?: string;
    isMenuOpen?: boolean;
    closeMenu?: () => void;
}

export default function Menu({isHeader, extensionClass, isMenuOpen, closeMenu}: MenuProps) {
    return (
        <ul className={isMenuOpen ? `${styles["menu"]} ${styles["menu--active"]} ${extensionClass}` : `${styles["menu"]} ${extensionClass}`}>
            <li
                className={styles["menu__item"]}
                onClick={closeMenu}
            >
                <Link to="/#catalog" className={styles["menu__link"]}>Catalog</Link>
            </li>

            <li
                className={styles["menu__item"]}
                onClick={closeMenu}
            >
                <Link to="/#faq" className={styles["menu__link"]}>FAQ</Link>
            </li>
            {
                isHeader &&
              <li
                className={styles["menu__item"]}
                onClick={closeMenu}
              >
                <Link to="/cart" className={styles["menu__link-wrap"]}>
                  <CartIcon />
                </Link>
              </li>
            }
        </ul>
    )
}