import styles from "./CartIcon.module.scss"

// const cart = {
//     quantity: 99
// }
export default function CartIcon() {
    const {data, isError, isLoading} = useGetCartQuery();
    const cart:ICart | undefined  = data?.carts[0];
    

    return (
        <div className={styles["cart-icon"]} aria-label="Иконка корзины">
            <span className={styles["cart-icon__text"]}>Cart</span>
            <img
                src="/images/cart-icon.svg"
                aria-hidden="true"
                width={20}
                height={20}
                loading="lazy"
            />
            <div title="Количество товаров в корзине" className={styles["cart-icon__quantity"]}>{cart?.quantity}+</div>
        </div>
    )
}