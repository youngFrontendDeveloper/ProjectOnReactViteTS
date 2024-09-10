import React from "react"
import styles from "./Presentation.module.scss";
import {Link} from "react-router-dom";

export default function Presentation() {
    return(
        <section className={styles["presentation"]}>
        <div className={`container ${styles["presentation__container"]}`}>
            <h1 className={styles["presentation__title"]}>Any products from famous brands with worldwide delivery</h1>
            <h2 className={styles["presentation__subtitle"]}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</h2>
            <Link to="#catalog" className="button">Go to shopping</Link>
        </div>
        </section>
    )
}