import styles from "./Presentation.module.scss";
import {Link} from "react-router-dom";
import Container from "../../templates/Container/Container.tsx";

export default function Presentation() {
    return (
        <section className={styles["presentation"]}>
            <Container extensionClass={styles["presentation__container"]}>
                <h2 className={styles["presentation__title"]}>
                    Any products from famous brands with worldwide
                    delivery
                </h2>
                <h3 className={styles["presentation__subtitle"]}>
                    We sell smartphones, laptops, clothes, shoes and many
                    other products at low prices
                </h3>
                <Link to="/#catalog" className={styles["presentation__link"]}>
                    Go to shopping
                </Link>
            </Container>
        </section>
    )
}

