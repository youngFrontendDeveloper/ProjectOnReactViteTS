import styles from "./CatalogItem.module.scss";
import { Link } from "react-router-dom";
import ButtonAddToCart from "../../atoms/ButtonAddToCart/ButtonAddToCart";
import AddedControl from "../../molecules/AddedControl/AddedControl";
import { IProduct } from "../../../models/models";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addProductToCart } from "../../../redux/features/cart/cartSlice";
import { useEffect, useState } from "react";

interface CatalogItemProps {
  item: IProduct;
  quantity: number;
}

export default function CatalogItem({ item, quantity }: CatalogItemProps) {
  // const { user } = useAppSelector((state) => state.user);
  const [productQuantity, setProductQuantity] = useState(quantity);
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  console.log(productQuantity);

  const getQuantity = (q: number) => {
    setProductQuantity(q);
  };

  const handleClickAddToCart = async () => {
    setProductQuantity((prevState) => prevState + 1);
    let data = {};
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
    const res = await dispatch(addProductToCart(data));
    console.log(res);
  };

  // useEffect(() => {
  //   const f = async () => {
  //     if (cart) {
  //       await dispatch(
  //         addProductToCart({
  //           cartId: cart.id,
  //           products: [
  //             ...cart.products,
  //             {
  //               id: item.id,
  //               quantity: productQuantity === 0 ? 1 : productQuantity + 1,
  //             },
  //           ],
  //         }),
  //       );
  //     }
  //   };
  //   f().catch(console.error);
  // }, [cart?.id, item.id, productQuantity, dispatch]);

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
          <AddedControl 
          defaultCount={quantity} 
          stock={item?.stock} 
          fn={getQuantity} 
          id={item.id}
          />
        ) : (
          <ButtonAddToCart fn={handleClickAddToCart} />
        )}
      </div>
    </li>
  );
}
