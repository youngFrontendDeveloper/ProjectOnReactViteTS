import styles from "./CartPage.module.scss";
import Container from "../Container/Container.tsx";
import Title from "../Title/Title.tsx";
import CartList from "../CartList/CartList.tsx";

export default function CartPage() {
    return (
        <section className={styles["cart"]}>
            <Container extensionClass={styles["cart__container"]}>
                <Title title="My cart" extensionClass={styles["cart__title"]} />
                <CartList />

                <dl className={styles["cart__price-wrap"]}>
                    <div className={`${styles["cart__count"]} ${styles["cart__price-item"]}`}>
                        <dt>Total count</dt>
                        <dd className={styles["cart__count-value"]}>3 items</dd>
                    </div>
                    <div className={`${styles["cart__discount"]} ${styles["cart__price-item"]}`}>
                        <dt>Price without discount</dt>
                        <dd className={styles["cart__discount-value"]}>$700</dd>
                    </div>
                    <div className={styles["cart__price"]}>
                        <dt>Total price</dt>
                        <dd className={styles["cart__price-value"]}>$590</dd>
                    </div>
                </dl>

            </Container>
        </section>
    )
}