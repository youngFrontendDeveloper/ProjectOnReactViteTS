import styles from "./CartItem.module.scss";
import { Link } from "react-router-dom";
import AddedControl from "../../molecules/AddedControl/AddedControl";
import ButtonAddToCart from "../../atoms/ButtonAddToCart/ButtonAddToCart";
import { ICartProduct } from "../../../models/models";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateProductsInCart } from "../../../redux/features/cart/cartSlice";
interface CartItemProps {
  item: ICartProduct;
  getDeletedProducts?: (product: ICartProduct) => void;
  deleted: boolean;
}

export default function CartItem({ item, getDeletedProducts, deleted }: CartItemProps) {
  const [isDeleted, setIsDeleted] = useState(deleted);
  const { cart } = useAppSelector((state) => state.cart);
  const discountPrice = (item?.price - (item?.price * item?.discountPercentage) / 100).toFixed(2);
  const dispatch = useAppDispatch();

  const handleClickAddToCart = async () => {
    let data = {};
    if (cart) {
      data = {
        cartId: cart.id,
        products: [
          ...cart.products,
          {
            id: item.id,
            quantity: item.quantity,
          },
        ],
      };
    }
    const res = await dispatch(updateProductsInCart(data));
    console.log(res);

    if (res) {
      setIsDeleted(false);
      getDeletedProducts(item, "addToCart");
    }
  };

  const handleClickDelete = async () => {
    let data = {};

    if (cart) {
      const products = cart.products.filter((product) => product.id !== item.id);
      data = {
        cartId: cart.id,
        products: [...products],
      };
    }
    const res = await dispatch(updateProductsInCart(data));
    console.log(res);

    if (res) {
      setIsDeleted(true);
      getDeletedProducts(item, "del");
    }
  };

  return (
    <li
      className={
        isDeleted
          ? `${styles["cart-item"]} ${styles["cart-item--deleted"]}`
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
        {!isDeleted && <AddedControl defaultCount={item?.quantity} id={item?.id} />}
        {isDeleted ? (
          <ButtonAddToCart
            extensionClass={styles["cart-item__btn-cart"]}
            fn={handleClickAddToCart}
          />
        ) : (
          <button type="button" className={styles["cart-item__delete"]} onClick={handleClickDelete}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
