// import React from "react"
import styles from "./Menu.module.scss"
import {Link} from "react-router-dom"
import CartIcon from "../CartIcon/CartIcon.tsx";

interface MenuProps {
    isHeader: boolean;
}
export default function Menu({isHeader}:MenuProps) {
    return (
        <ul className={styles["menu"]}>
            <li className={styles["menu__item"]}>
                <Link to="/#catalog" className={styles["menu__link"]}>Catalog</Link>
            </li>

            <li className={styles["menu__item"]}>
                <Link to="/#faq" className={styles["menu__link"]}>FAQ</Link>
            </li>
            {
                isHeader &&
              <li className={styles["menu__item"]}>
                <Link to="/cart" className={styles["menu__link-wrap"]}>
                  <CartIcon />
                </Link>
              </li>
            }

        </ul>
    )
}