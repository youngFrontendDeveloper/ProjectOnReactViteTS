import styles from "./Header.module.scss"
import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

export default function Header(){
  return(
    <header className={styles["header"]}>
        <div className={`container ${styles["header__container"]}`}>
            <Logo />
            <Navigation />
        </div>

    </header>
  )
}