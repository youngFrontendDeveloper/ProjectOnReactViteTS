import styles from "./NotFoundPage.module.scss"
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className={styles["not-found"]} aria-label="Page Not Found">
            <h1 className="visually-hidden">Эта страница не найдена</h1>
            <p className={styles["not-found__main"]}>404</p>
            <p>Oh, this page has not been found</p>
            <Link to="/"  className={styles["not-found__link"]}>Go back to the main page</Link>
        </section>
    )
}