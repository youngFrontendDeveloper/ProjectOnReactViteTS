import styles from "./Catalog.module.scss";
import CatalogItem from "../CatalogItem/CatalogItem.tsx";
import Title from "../Title/Title.tsx";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement.tsx";
import Container from "../Container/Container.tsx";
import Button from "../Button/Button.tsx";
import {useGetProductsQuery} from "../../redux/services/products/productsApi.ts";
import {useDebounce} from "../../hooks/debounce.ts";
import {useState} from "react";

export default function Catalog() {
    const [searchWord, setSearchWord] = useState("")
    const [page, setPage] = useState("")
    const debounced = useDebounce(searchWord);

    const {data, isError, isLoading} = useGetProductsQuery({
        searchWord: debounced,
        limit: 12,
        skip: 12,
        page: page,
    });

    const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value)
    }

    return (
        <section className={styles["catalog"]} id="catalog">
            <ScrollToHashElement />
            <Container extensionClass={styles["catalog__container"]}>
                <Title title="Catalog" extensionClass={styles["catalog__title"]} />
                <input
                    type="text"
                    className={styles["catalog__search"]}
                    placeholder="Search by title"
                    onChange={handleChangeSearch}
                />
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
                <Button
                    text="Show more"
                    extensionClass={styles["catalog_-button"]}
                    // fn={fetchProducts}
                />
            </Container>
        </section>
    )
}