import React from "react"
import styles from "./Menu.module.scss"
import {Link} from "react-router-dom"
import CartIcon from "../CartIcon/CartIcon.tsx";


export default function Menu({isHeader}: boolean) {
    return (
        <ul className={styles["menu"]}>
            <li className={styles["menu__item"]}>
                <Link to="/" className={styles["menu__link"]}>Catalog</Link>
            </li>

            <li className={styles["menu__item"]}>
                <Link to="#FAQ" className={styles["menu__link"]}>FAQ</Link>
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