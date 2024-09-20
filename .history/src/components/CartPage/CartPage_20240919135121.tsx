import styles from "./CartPage.module.scss";
import Container from "../Container/Container.tsx";
import Title from "../Title/Title.tsx";
import CartList from "../CartList/CartList.tsx";
import {useGetCartQuery} from "../../redux/services/cart/cartApi.ts";
import {ICart, ICartData} from "../../models/models.ts";


export default function CartPage() {
    const {data, isError, isLoading} = useGetCartQuery();
    const cart:ICart | undefined  = data?.carts[0];
    // console.log(data)
    return (
        <section className={styles["cart"]}>
            <Container extensionClass={styles["cart__container"]}>
                <h1 className="visually-hidden">Страница корзины сайта Goods4you</h1>
                <Title title="My cart" extensionClass={styles["cart__title"]} />
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    isError && <p>Error...</p>
                }
                {
                    (cart && cart?.products?.length > 0) ?
                        <>
                            <CartList cart={cart} />

                            <dl className={styles["cart__price-wrap"]}>
                                <div className={`${styles["cart__count"]} ${styles["cart__price-item"]}`}>
                                    <dt>Total count</dt>
                                    <dd className={styles["cart__count-value"]}>{cart?.totalProducts}</dd>
                                </div>
                                <div className={`${styles["cart__discount"]} ${styles["cart__price-item"]}`}>
                                    <dt>Price without discount</dt>
                                    <dd className={styles["cart__discount-value"]}>{cart.total}</dd>
                                </div>
                                <div className={styles["cart__price"]}>
                                    <dt>Total price</dt>
                                    <dd className={styles["cart__price-value"]}>{cart.discountedTotal}</dd>
                                </div>
                            </dl>
                        </>
                        :
                        <p className={styles["cart__message"]}>No items</p>

                }


            </Container>

        </section>
    )
}