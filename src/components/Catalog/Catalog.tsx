import styles from "./Catalog.module.scss";
import CatalogItem from "../CatalogItem/CatalogItem.tsx";
import Title from "../Title/Title.tsx";
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement.tsx";
import Container from "../Container/Container.tsx";
import Button from "../Button/Button.tsx";
import {useGetProductsQuery} from "../../redux/services/products/productsApi.ts";
import {useDebounce} from "../../hooks/debounce.ts";
import {useEffect, useState} from "react";
import {IProduct} from "../../models/models.ts";
import {useAppSelector} from "../../redux/hooks.ts";

export default function Catalog() {
    const [searchWord, setSearchWord] = useState("")
    const [showButton, setShowButton] = useState(true)
    const [skip, setSkip] = useState(0)
    const debounced = useDebounce(searchWord);
    const {data, isError, isLoading} = useGetProductsQuery({
        searchWord: debounced,
        limit: 12,
        skip: skip,
    });
    const [products, setProducts] = useState<IProduct[]>(data?.products || []);
    const {cart} = useAppSelector(state => state.cart)

    useEffect(() => {
        if (data?.products) {
            setShowButton(true)
            setProducts((prevProducts) => [...prevProducts, ...data.products]);
        }
    }, [data]);

    useEffect(() => {
        if ((data?.products && data?.products.length < 12) || (data?.total && skip > data?.total)) {
            setShowButton(false)
        }
    }, [skip, data])

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProducts([])
        setSearchWord(e.target.value)
    }

    const handleClickGetProducts = () => {
        setSkip(prev => prev + 12)
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
                        products?.map((product, index) => (
                            <CatalogItem
                                item={product}
                                key={`catalog_${index}`}
                                quantity={cart?.products.find(cartItem => cartItem.id === product.id)?.quantity}
                            />
                        ))
                    }
                </ul>
                {
                    showButton &&
                  <Button
                    text="Show more"
                    extensionClass={styles["catalog_-button"]}
                    fn={handleClickGetProducts}
                  />
                }
            </Container>
        </section>
    )
}