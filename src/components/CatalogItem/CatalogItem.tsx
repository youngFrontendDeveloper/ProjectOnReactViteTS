// import React from "react";
import styles from "./CatalogItem.module.scss";
import {Link} from "react-router-dom";

interface CatalogItem {
    "id": number,
    "src": string,
    "title": string,
    "price": string
}

interface CatalogProps {
    item: CatalogItem
}

export default function CatalogItem({item}: CatalogProps) {
    return (
        <li className={styles["catalog-item"]} key={`product-${item?.id}`}>
            <Link to={`/product/${item?.id}`} className={styles["catalog-item__link"]}>
                <div className={styles["catalog-item__img-wrap"]}>
                    <img src={item?.src} alt={item?.title} className={styles["catalog-item__img"]} />
                </div>
                <div className={styles["catalog-item__text-wrap"]}>
                    <p className={styles["catalog-item__title"]}>{item?.title}</p>
                    <p className={styles["catalog-item__price"]}>{item?.price}</p>

                </div>
            </Link>
            <button className={styles["catalog-item__button"]} type="button" aria-label="Иконка корзины">
                <img src="/images/cart-icon.svg" aria-hidden="true" width={18} height={18} />
            </button>
        </li>
    )
}