import styles from "./CartList.module.scss";
import CartItem from "../CartItem/CartItem";
import { ICartProduct } from "../../../models/models";
import { useState } from "react";

interface CartListProps {
  carts: ICartProduct[];
}

export default function CartList({ carts }: CartListProps) {
  const [deletedProducts, setDeletedProducts] = useState<ICartProduct[]>([]);

  const getDeletedProducts = (product: ICartProduct, command: string): void => {
    if (command === "addToCart") {
      const products = deletedProducts.filter((item) => item.id !== product.id);
      setDeletedProducts([...products]);
    } else {
      setDeletedProducts([...deletedProducts, product]);
    }
  };

  return (
    <>
      <ul className={styles["cart-list"]}>
        {carts?.map((item) => (
          <CartItem
            item={item}
            key={`cart-${item.id}`}
            getDeletedProducts={getDeletedProducts}
            deleted={false}
          />
        ))}
        {deletedProducts.length > 0 &&
          deletedProducts.map((deletedItem) => (
            <CartItem
              item={deletedItem}
              key={`deleted-${deletedItem.id}`}
              getDeletedProducts={getDeletedProducts}
              deleted={true}
            />
          ))}
      </ul>
    </>
  );
}
