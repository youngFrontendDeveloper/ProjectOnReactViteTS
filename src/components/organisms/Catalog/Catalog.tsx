import styles from "./Catalog.module.scss";
import Title from "../../atoms/Title/Title";
import ScrollToHashElement from "../../../utilites/ScrollToHashElement/ScrollToHashElement";
import Container from "../../templates/Container/Container";
import Button from "../../atoms/Button/Button";
import {useGetProductsQuery} from "../../../redux/services/products/productsApi";
import {useDebounce} from "../../../hooks/debounce";
import {useEffect, useState} from "react";
import {IProduct} from "../../../models/models";
import {useAppSelector} from "../../../redux/hooks";
import CatalogItem from "../CatalogItem/CatalogItem";
import Input from "../../atoms/Input/Input";

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

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
                <Input 
                    extensionClass={styles["catalog__search"]} 
                    placeholder="Search by title"                   
                    fn={(e)=>handleChangeSearch(e)}
                    />
                {/* <input
                    type="text"
                    className={styles["catalog__search"]}
                    placeholder="Search by title"
                    onChange={handleChangeSearch}
                /> */}
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
                                quantity={cart?.products.find(cartItem => cartItem.id === product.id)?.quantity ?? 0}
                            />
                        ))
                    }
                </ul>
                {
                    showButton &&
                  <Button
                    text="Show more"
                    extensionClass={styles["catalog__button"]}
                    fn={handleClickGetProducts}
                  />
                }
            </Container>
        </section>
    )
}