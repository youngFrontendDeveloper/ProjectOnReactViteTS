import styles from "./CartItem.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";

interface CartItem {
    "id": number,
    "src": string,
    "title": string,
    "price": string
}

interface CartItemProps {
    item: CartItem
}

export default function CartItem({item}: CartItemProps) {
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const [count, setCount] = useState(1);
    const countName = count > 1 ? "items" : "item";

    const handleClickPlus = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleClickMinus = () => {
        if (count === 0) {
            setCount(0)
        } else {
            setCount(prevCount => prevCount - 1)
        }
    }

    const handleClickDelete = () => {
        setIsDeleted(true);
    }


    return (
        <li className={isDeleted ? `${styles["cart-item"]} ${styles["cart-item--deleted"]}}` : `${styles["cart-item"]}`}>
            {/*<div className={styles["cart-item__content"]}>*/}
            <div
                className={isDeleted ? `${styles["cart-item__content"]} ${styles["deleted"]}` : `${styles["cart-item__content"]}`}
            >
                <img
                    src="/images/product1.jpg" alt="Изображение продукта" width={100} height={100}
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
                    !isDeleted &&
                  <>
                    <button
                      type="button"
                      onClick={handleClickMinus}
                      className={`${styles["cart-item__btn"]} ${styles["cart-item__btn--minus"]}`}
                      aria-label="Минус"
                    >
                      <img src="/images/minus-icon.svg" aria-hidden="true" width={18} height={3} />
                    </button>
                    <p className={styles["cart-item__count"]}>{count} {countName} </p>
                    <button
                      type="button"
                      onClick={handleClickPlus}
                      className={styles["cart-item__btn"]}
                    >
                      <img src="/images/plus-icon.svg" aria-hidden="true" width={18} height={18} />
                    </button>
                  </>
                }
                {
                    isDeleted ?
                        <button
                            type="button"
                            onClick={handleClickPlus}
                            className={`${styles["cart-item__btn"]} ${styles["cart-item__btn-cart"]}`}
                        >
                            <img
                                src="/images/cart-icon.svg"
                                aria-role="image"
                                aria-label="Корзина"
                                width={18}
                                height={18}
                            />
                        </button>
                        :
                        <button
                            type="button"
                            className={styles["cart-item__delete"]}
                            onClick={handleClickDelete}
                        >
                            Delete
                        </button>
                }

            </div>
        </li>
    )
}