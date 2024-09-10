import React from "react"
import styles from "./CartIcon.module.scss"

const cart = {
    quantity: 99
}
export default function CartIcon() {
    return (
        <div className={styles["cart-icon"]}>
            <span className={styles["cart-icon__text"]}>Cart</span>
            <img src="./images/cart-icon.svg" alt="Иконка корзины" />
            <div title="Количество товаров в корзине" className={styles["cart-icon__quantity"]}>{cart?.quantity}+</div>
        </div>
    )
}