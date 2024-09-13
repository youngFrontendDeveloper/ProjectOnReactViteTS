// import React from "react";
import styles from "./Navigation.module.scss";
import Menu from "../Menu/Menu.tsx";
import Login from "../Login/Login.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";

export default function Navigation() {
    return (
        <nav className={styles["nav"]}>
            <Menu isHeader={true} />
            <BurgerMenu />
            <Login />
        </nav>
    )
}