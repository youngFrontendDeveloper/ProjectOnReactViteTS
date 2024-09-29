import styles from "./Catalog.module.scss"
import data from "../../data/data.json"
import CatalogItem from "../CatalogItem/CatalogItem.tsx";
import Title from "../Title/Title.tsx";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement.tsx";
import Container from "../Container/Container.tsx";
import Button from "../Button/Button.tsx";

export default function Catalog() {
    return (
        <section className={styles["catalog"]} id="catalog">
            <ScrollToHashElement />
            <Container extensionClass={styles["catalog__container"]}>
                <Title title="Catalog" extensionClass={styles["catalog__title"]} />
                <input type="text" className={styles["catalog__search"]} placeholder="Search by title" />
                <ul className={styles["catalog__list"]}>
                    {
                        data.map((item, index) => (
                            <CatalogItem item={item} key={`catalog_${index}`} />
                        ))
                    }
                </ul>
                <Button text="Show more" extensionClass={styles["catalog_-button"]} />
            </Container>
        </section>
    )
}