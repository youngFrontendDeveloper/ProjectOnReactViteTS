import styles from "./Catalog.module.scss"
// import data from "../../data/data.json";
import CatalogItem from "../CatalogItem/CatalogItem.tsx";
import Title from "../Title/Title.tsx";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement.tsx";
import Container from "../Container/Container.tsx";
import Button from "../Button/Button.tsx";
import {useGetProductsQuery} from "../../redux/services/products/productsApi.ts";


export default function Catalog() {
    const {data, isError, isLoading} = useGetProductsQuery();
    // console.log(data)
    return (
        <section className={styles["catalog"]} id="catalog">
            <ScrollToHashElement />
            <Container extensionClass={styles["catalog__container"]}>
                <Title title="Catalog" extensionClass={styles["catalog__title"]} />
                <input type="text" className={styles["catalog__search"]} placeholder="Search by title" />
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    isError && <p>Error...</p>
                }
                <ul className={styles["catalog__list"]}>
                    {
                        data?.products.map((item, index) => (
                            <CatalogItem item={item} key={`catalog_${index}`} />
                        ))
                    }
                </ul>
                <Button text="Show more" extensionClass={styles["catalog_-button"]} />
            </Container>
        </section>
    )
}