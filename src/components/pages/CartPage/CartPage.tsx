import styles from "./CartPage.module.scss";
import Container from "../../templates/Container/Container";
import Title from "../../atoms/Title/Title";
import CartList from "../../organisms/CartList/CartList";
import {useAppSelector} from "../../../redux/hooks";


export default function CartPage() {
    const {cart, status, error} = useAppSelector((state) => state.cart);
    // const {user}=useAppSelector((state) => state.user);
     

    return (
        <section className={styles["cart"]}>
            <Container extensionClass={styles["cart__container"]}>
                <h1 className="visually-hidden">Страница корзины сайта Goods4you</h1>
                <Title title="My cart" extensionClass={styles["cart__title"]} />
                {
                    (status === 'loading') && <p>Loading...</p>
                }
                {
                    status === 'failed' && <p>Error: {error}</p>
                }
                {
                    cart &&
                    (cart?.products?.length > 0 ?
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
                    )
                }
            </Container>
        </section>
    )
}