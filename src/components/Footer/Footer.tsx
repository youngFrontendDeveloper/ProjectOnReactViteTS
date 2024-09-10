import React from "react";
import styles from "./Footer.module.scss";
import Menu from "../Menu/Menu.tsx";
import Logo from "../Logo/Logo.tsx";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <Logo />
            <Menu isHeader={false} />
        </footer>
    )
}