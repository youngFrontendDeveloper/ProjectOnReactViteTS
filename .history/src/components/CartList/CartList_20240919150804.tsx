import styles from "./CartList.module.scss"
import CartItem from "../CartItem/CartItem.tsx";
import {ICart} from "../../models/models.ts";

// const cart = [
//     {
//         "id": 1,
//         "src": "/images/catalog.jpg",
//         "title": "Essence Mascara Lash Princess",
//         "price": "$110",
//         "count": 1,
//         "isDeleted": false
//     },
//     {
//         "id": 2,
//         "src": "/images/catalog.jpg",
//         "title": "Essence Mascara Lash Princess",
//         "price": "$110",
//         "count": 1,
//         "isDeleted": false
//     },
//     {
//         "id": 3,
//         "src": "/images/catalog.jpg",
//         "title": "Essence Mascara Lash Princess",
//         "price": "$110",
//         "count": 5,
//         "isDeleted": false
//     },
//     {
//         "id": 4,
//         "src": "/images/catalog.jpg",
//         "title": "Essence Mascara Lash Princess",
//         "price": "$110",
//         "count": 0,
//         "isDeleted": true
//     },
// ]

interface CartListProps {
    cart: ICart
}

export default function CartList({cart}: CartListProps) {
    // console.log(cart)
    return (
        <>
            <ul className={styles["cart-list"]}>
                {
                    cart?.products.map(item => <CartItem item={item} key={`cart-${item.id}`} />)
                }
            </ul>
        </>

    )
}