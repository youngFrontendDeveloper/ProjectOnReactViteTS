import styles from "./AddedControl.module.scss";
import { updateProductsInCart } from "../../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Error from "../../atoms/Error/Error";
import { useState } from "react";
import Loading from "../Loading/Loading";
interface AddedControlProps {
  id: number;
  defaultCount: number;
  stock?: number;
  extensionClass?: string;
}

export default function AddedControl({
  defaultCount,
  extensionClass,
  stock,
  id,
}: AddedControlProps) {
  const [count, setCount] = useState<number>(defaultCount);
  const [prevCount, setPrevCount] = useState<number>(defaultCount);
  const [responseError, setResponseError] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const countName = count > 1 ? "items" : "item";
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => state.cart);
  // const isLoading = cartState.status === "loading";

  const updateCart = async (newCount: number) => {
    if (cart) {
      setIsUpdating(true);
      const res = await dispatch(
        updateProductsInCart({
          cartId: cart.id,
          products: [
            ...cart.products,
            {
              id: id,
              quantity: newCount,
            },
          ],
        }),
      );
      setIsUpdating(false);

      if (res && res.error) {
        setResponseError(res.payload);
        setCount(prevCount);

        const timer = setTimeout(() => {
          setResponseError("");
        }, 2000);

        return () => clearTimeout(timer);
      }

      setPrevCount(newCount);
    }
  };

  const handleClickPlus = () => {
    let newCount: number = 0;

    if (stock && count >= stock) {
      newCount = stock;
    } else {
      newCount = count + 1;
    }
    setCount(newCount);
    updateCart(newCount);
  };

  const handleClickMinus = () => {
    let newCount: number = 0;

    if (count === 1) {
      newCount = 1;
    } else {
      newCount = count - 1;
    }

    setCount(newCount);
    updateCart(newCount);
  };

  return (
    <div className={`${styles["added-control"]} ${extensionClass}`}>
      <button
        type="button"
        disabled={count === 1 || isUpdating}
        onClick={handleClickMinus}
        className={
          count === 1 || isUpdating
            ? `${styles["added-control__btn"]}  ${styles["added-control__btn--blocked"]}`
            : `${styles["added-control__btn"]} `
        }
        aria-label="Minus"
      >
        <img src="/images/minus-icon.svg" aria-hidden="true" width={18} height={3} loading="lazy" />
      </button>
      <p className={styles["added-control__count"]}>
        {count} {countName}{" "}
      </p>
      <button
        type="button"
        disabled={count === stock || isUpdating}
        onClick={handleClickPlus}
        className={
          count === stock || isUpdating
            ? `${styles["added-control__btn"]}  ${styles["added-control__btn--blocked"]}`
            : `${styles["added-control__btn"]} `
        }
        aria-label="Plus"
      >
        <img src="/images/plus-icon.svg" aria-hidden="true" width={18} height={18} loading="lazy" />
      </button>
      {isUpdating && (
        <div className={styles["added-control__modal"]}>
          <Loading />
        </div>
      )}
      {responseError && <Error><p>{responseError}</p></Error>}
    </div>
  );
}
