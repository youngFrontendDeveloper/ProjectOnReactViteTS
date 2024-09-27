import { useDebounce } from "../../../hooks/debounce";
import { addProductToCart } from "../../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styles from "./AddedControl.module.scss";
import { useCallback, useEffect, useState } from "react";

interface AddedControlProps {
  stock?: number;
  defaultCount: number;
  extensionClass?: string;
  fn?: (q: number) => void;
  id: number;
}

export default function AddedControl({
  defaultCount,
  extensionClass,
  stock,
  fn,
  id,
}: AddedControlProps) {
  const [count, setCount] = useState<number>(defaultCount);
  const countName = count > 1 ? "items" : "item";
  const debouncedCount = useDebounce(count, 500); // Дебаунсим count
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log(id);

  // Добавляем товар в корзину
  const updateCart = async (newCount: number) => {
    if (cart) {
      await dispatch(
        addProductToCart({
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
    }
  };

  // Используем useEffect для отслеживания debouncedCount
  useEffect(() => {
    if (debouncedCount !== defaultCount) {
      updateCart(debouncedCount);
    }
  }, [debouncedCount]); // Вызываем только при изменении debouncedCount

  // Обработчик кнопки "плюс"
  const handleClickPlus = () => {
    if (count >= stock) {
      setCount(stock);
    } else {
      setCount((prev) => prev + 1);
    }
  };

  // Обработчик кнопки "минус"
  const handleClickMinus = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  //    const handleClickPlus = async () => {
  //     let newCount;
  //     if (count >= stock) {
  //       setCount(stock);
  //     } else {
  //       newCount = count + 1;
  //       setCount(newCount);
  //     }

  //     if (cart) {
  //       await dispatch(
  //         addProductToCart({
  //           cartId: cart.id,
  //           products: [
  //             ...cart.products,
  //             {
  //               id: id,
  //               quantity: newCount,
  //             },
  //           ],
  //         }),
  //       );
  //     }
  //   };

  //   const handleClickMinus = () => {
  //     if (count === 0) {
  //       setCount(0);
  //     } else {
  //       setCount((prevCount) => prevCount - 1);
  //     }
  //     if (fn) {
  //       fn(count);
  //     }
  //   };

  return (
    <div className={`${styles["added-control"]} ${extensionClass}`}>
      <button
        type="button"
        onClick={handleClickMinus}
        className={
          count === 0
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
        onClick={handleClickPlus}
        className={
          count === stock
            ? `${styles["added-control__btn"]}  ${styles["added-control__btn--blocked"]}`
            : `${styles["added-control__btn"]} `
        }
        aria-label="Plus"
      >
        <img src="/images/plus-icon.svg" aria-hidden="true" width={18} height={18} loading="lazy" />
      </button>
    </div>
  );
}
