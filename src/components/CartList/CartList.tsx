import styles from "./CartList.module.scss"
import CartItem from "../CartItem/CartItem.tsx";

const cart = [
    {
        "id": 1,
        "src": "/images/catalog.jpg",
        "title": "Essence Mascara Lash Princess",
        "price": "$110",
        "count": 1,
        "isDeleted": false
    },
    {
        "id": 2,
        "src": "/images/catalog.jpg",
        "title": "Essence Mascara Lash Princess",
        "price": "$110",
        "count": 1,
        "isDeleted": false
    },
    {
        "id": 3,
        "src": "/images/catalog.jpg",
        "title": "Essence Mascara Lash Princess",
        "price": "$110",
        "count": 5,
        "isDeleted": false
    },
    {
        "id": 4,
        "src": "/images/catalog.jpg",
        "title": "Essence Mascara Lash Princess",
        "price": "$110",
        "count": 0,
        "isDeleted": true
    },
]

export default function CartList() {
    return (
        <ul className={styles["cart-list"]}>
            {
                cart.map(item => <CartItem item={item} />)
            }
        </ul>
    )
}