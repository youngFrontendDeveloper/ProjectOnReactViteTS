import styles from "./CartIcon.module.scss"
// import { ICart } from "../../models/models";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks.ts";
import { useEffect } from "react";
import { fetchCart } from "../../../redux/features/cart/cartSlice.ts";

export default function CartIcon() {   
    const dispatch = useAppDispatch();      
    const {cart, status} = useAppSelector((state) => state.cart);
 
    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchCart());
        }
      }, [status, dispatch]);

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
            {
                cart?.totalQuantity  && cart?.totalQuantity > 0 &&
                <div title="Количество товаров в корзине" className={styles["cart-icon__quantity"]}>
                    {cart?.totalQuantity}+
                </div>               
            }
          </div>
    )
}