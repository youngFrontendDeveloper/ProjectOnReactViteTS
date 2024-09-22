import styles from "./CatalogItem.module.scss";
import {Link} from "react-router-dom";
import ButtonAddToCart from "../../atoms/ButtonAddToCart/ButtonAddToCart.tsx";
import AddedControl from "../../molecules/AddedControl/AddedControl.tsx";
import {IProduct} from "../../../models/models.ts";

interface CatalogItemProps {
    item: IProduct;
    quantity: number;
}

export default function CatalogItem({item, quantity}: CatalogItemProps) {
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
                {
                    quantity ?
                        <AddedControl defaultCount={quantity} />
                        :
                        <ButtonAddToCart />
                }
            </div>


        </li>
    )
}