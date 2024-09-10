import React from "react"
import styles from "./Presentation.module.scss";
import {Link} from "react-router-dom";

export default function Presentation() {
    return(
        <section className={styles["presentation"]}>
        <div className="container">
            <Link to="#catalog" className="button">Go to shopping</Link>
        </div>
        </section>
    )
}