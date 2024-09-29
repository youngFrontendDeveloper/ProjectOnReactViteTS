import styles from "./CatalogItem.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAddToCart from "../../atoms/ButtonAddToCart/ButtonAddToCart";
import AddedControl from "../../molecules/AddedControl/AddedControl";
import { IProduct } from "../../../models/models";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateProductsInCart } from "../../../redux/features/cart/cartSlice";
import Error from "../../atoms/Error/Error";

interface CatalogItemProps {
  item: IProduct;
  quantity: number;
}

interface ProductData {
  cartId: number;
  products: { id: number; quantity: number }[];
}

export default function CatalogItem({ item, quantity }: CatalogItemProps) {
  const [responseError, setResponseError] = useState("");
  const [productQuantity, setProductQuantity] = useState(quantity);
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClickAddToCart = async () => {
    setProductQuantity((prevState) => prevState + 1);
    let data: ProductData = {
      cartId: 0,
      products: [],
    };
    if (cart) {
      data = {
        cartId: cart.id,
        products: [
          ...cart.products,
          {
            id: item.id,
            quantity: productQuantity === 0 ? 1 : productQuantity + 1,
          },
        ],
      };
    }
    const res = await dispatch(updateProductsInCart(data));
    if (res && res.error) {
      setResponseError(res.payload);

      const timer = setTimeout(() => {
        setResponseError("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  };

  return (
    <li className={styles["catalog-item"]} key={`product-${item?.id}`}>
      <Link to={`/product/${item?.id}`} className={styles["catalog-item__link"]}>
        <div className={styles["catalog-item__img-wrap"]}>
          <img
            src={item?.thumbnail}
            alt={item?.title}
            className={styles["catalog-item__img"]}
            width={370}
            height={300}
            loading="lazy"
          />
        </div>
        <div className={styles["catalog-item__text-wrap"]}>
          <p className={styles["catalog-item__title"]}>{item?.title}</p>
          <p className={styles["catalog-item__price"]}>{item?.price}</p>
        </div>
      </Link>
      <div className={styles["catalog-item__control"]}>
        {quantity ? (
          <AddedControl defaultCount={quantity} stock={item?.stock} id={item.id} />
        ) : (
          <ButtonAddToCart fn={handleClickAddToCart} />
        )}
      </div>
      {responseError && <Error responseError={responseError} />}
    </li>
  );
}
