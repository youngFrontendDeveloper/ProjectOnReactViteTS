import styles from "./CartItem.module.scss";
import { Link } from "react-router-dom";
import AddedControl from "../../molecules/AddedControl/AddedControl";
import ButtonAddToCart from "../../atoms/ButtonAddToCart/ButtonAddToCart";
import { ICartProduct } from "../../../models/models";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { removeProductFromCart } from "../../../redux/features/cart/cartSlice";
interface CartItemProps {
  item: ICartProduct;
}

export default function CartItem({ item }: CartItemProps) {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const discountPrice = (item?.price - (item?.price * item?.discountPercentage) / 100).toFixed(2);
  const dispatch = useAppDispatch();

  console.log(item);

  const handleClickDelete = async () => {
    try {
      const response = await dispatch(removeProductFromCart(item.id));
      console.log(response);

      if (response) {
        setIsDeleted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li
      className={
        isDeleted
          ? `${styles["cart-item"]} ${styles["cart-item--deleted"]}}`
          : `${styles["cart-item"]}`
      }
    >
      <div
        className={
          isDeleted
            ? `${styles["cart-item__content"]} ${styles["deleted"]}`
            : `${styles["cart-item__content"]}`
        }
      >
        <img
          src={item?.thumbnail}
          width={100}
          height={100}
          alt={`Изображение продукта ${item?.title}`}
          className={styles["cart-item__img"]}
          loading="lazy"
        />
        <div className={styles["cart-item__text-wrap"]}>
          <Link to={`/product/${item.id}`} className={styles["cart-item__link"]}>
            {item?.title}
          </Link>
          <p className={styles["cart-item__price"]}>{discountPrice}</p>
        </div>
      </div>
      <div className={styles["cart-item__button-wrap"]}>
        {!isDeleted && <AddedControl defaultCount={item?.quantity} />}
        {isDeleted ? (
          <ButtonAddToCart extensionClass={styles["cart-item__btn-cart"]} />
        ) : (
          <button type="button" className={styles["cart-item__delete"]} onClick={handleClickDelete}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
