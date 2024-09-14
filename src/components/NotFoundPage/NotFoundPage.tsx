import styles from "./NotFoundPage.module.scss"
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className={styles["not-found"]} aria-label="Page Not Found">
            <h1 className="visually-hidden">Эта страница не найдена</h1>
            <p className={styles["not-found__main"]}>404</p>
            <p>Ой, эта страница не найдена</p>
            <Link to="/"  className={styles["not-found__link"]}>Вернуться на главную</Link>
        </section>
    )
}