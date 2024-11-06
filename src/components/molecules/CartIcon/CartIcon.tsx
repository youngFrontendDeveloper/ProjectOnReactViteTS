import styles from "./CartIcon.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { fetchCart } from "../../../redux/features/cart/cartSlice";

export default function CartIcon() {
  const dispatch = useAppDispatch();
  const { cart, status } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (status === "idle" && user?.id) {
      dispatch(fetchCart(user.id));
    }
  }, [user, status, dispatch]);

  return (
    <div className={styles["cart-icon"]} aria-label="Cart icon">
      <span className={styles["cart-icon__text"]}>Cart</span>
      <img src="/images/cart-icon.svg" aria-hidden="true" width={20} height={20} loading="lazy" />
      {cart && cart?.totalQuantity > 0 && (
        <div title="The number of items in the cart" className={styles["cart-icon__quantity"]}>
          {cart?.totalQuantity < 100 ? cart?.totalQuantity : `${cart?.totalQuantity}+`}
        </div>
      )}
    </div>
  );
}
