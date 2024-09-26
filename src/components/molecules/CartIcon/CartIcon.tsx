import styles from "./CartIcon.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { fetchCart } from "../../../redux/features/cart/cartSlice";

export default function CartIcon() {   
    const dispatch = useAppDispatch();      
    const {cart, status} = useAppSelector((state) => state.cart);
 
    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchCart());
        }
      }, [status, dispatch]);

    return (
        <div className={styles["cart-icon"]} aria-label="Cart icon">
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