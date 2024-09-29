import styles from "./MenuItem.module.scss";
import React from "react";
import {Link} from "react-router-dom";


interface MenuItemProps {
    children: React.ReactNode;
    link: string;
    closeMenu: () => void;
}

export default function MenuItem({children, link, closeMenu}: MenuItemProps) {
    return (
        <li
            className={styles["menu-item__item"]}
            onClick={closeMenu}
        >
            <Link to={link} className={styles["menu-item__link"]}>               
                {children}
            </Link>
        </li>
    )
}