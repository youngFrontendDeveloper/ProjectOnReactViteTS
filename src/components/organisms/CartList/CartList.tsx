import styles from "./CartList.module.scss"
import CartItem from "../CartItem/CartItem";
import {ICart} from "../../../models/models";

interface CartListProps {
    cart: ICart
}

export default function CartList({cart}: CartListProps) {

    return (
        <>
            <ul className={styles["cart-list"]}>
                {
                    cart?.products.map(item =>
                        <CartItem item={item} key={`cart-${item.id}`} />
                    )
                }
            </ul>
        </>

    )
}