import React from "react"
import styles from "./Home.module.scss"
import Presentation from "../Presentation/Presentation.tsx";
import Catalog from "../Catalog/Catalog.tsx";

export default function Home() {
    return (
        <main className={styles['main']}>
            <Presentation />
            <Catalog />
        </main>
    )
}