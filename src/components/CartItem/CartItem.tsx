import styles from "./CartItem.module.scss";
import {Link} from "react-router-dom";
// import {useState} from "react";
import AddedControl from "../AddedControl/AddedControl.tsx";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart.tsx";

interface CartItem {
    "id": number,
    "src": string,
    "title": string,
    "price": string,
    "count": number,
    "isDeleted": boolean
}

interface CartItemProps {
    item: CartItem
}

export default function CartItem({item}: CartItemProps) {
    // const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const isDeleted = item?.isDeleted
    //
    // const handleClickDelete = () => {
    //     setIsDeleted(true);
    // }


    return (
        <li className={isDeleted ? `${styles["cart-item"]} ${styles["cart-item--deleted"]}}` : `${styles["cart-item"]}`}>

            <div
                className={isDeleted ? `${styles["cart-item__content"]} ${styles["deleted"]}` : `${styles["cart-item__content"]}`}
            >
                <img
                    src="/images/cart1.jpg" alt="Изображение продукта"
                    width={100} height={100}
                    className={styles["cart-item__img"]}
                />
                <div className={styles["cart-item__text-wrap"]}>
                    <Link to={`/product/${item.id}`} className={styles["cart-item__link"]}>
                        {item.title}
                    </Link>
                    <p className={styles["cart-item__price"]}>{item.price}</p>
                </div>
            </div>
            <div className={styles["cart-item__button-wrap"]}>
                {
                    !isDeleted && <AddedControl defaultCount={item?.count} />
                }
                {
                    isDeleted ? <ButtonAddToCart extensionClass={styles["cart-item__btn-cart"]} />

                        :
                        <button
                            type="button"
                            className={styles["cart-item__delete"]}
                            // onClick={handleClickDelete}
                        >
                            Delete
                        </button>
                }

            </div>
        </li>
    )
}