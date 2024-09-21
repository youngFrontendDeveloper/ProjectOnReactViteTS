import styles from "./Product.module.scss";
import {useParams} from "react-router-dom";
import Title from "../Title/Title.tsx";
import Container from "../Container/Container.tsx";
import Button from "../Button/Button.tsx";
import {useGetProductByIdQuery} from "../../redux/services/products/productsApi.ts";
import Rating from "../Rating/Rating.tsx";
import AddedControl from "../AddedControl/AddedControl.tsx";
import {useAppSelector} from "../../redux/hooks.ts";


export default function Product() {
    const params = useParams();
    const id = params.id || "";
    const {data: product, isError, isLoading} = useGetProductByIdQuery(id);
    const discountPrice = product?.price ? (product?.price - (product?.price * product?.discountPercentage / 100)).toFixed(2) : 0;
    const {cart} = useAppSelector(state => state.cart)
    const quantity = cart?.products?.find(item => item.id === product?.id)?.quantity;
    console.log(product)
    console.log(quantity)
    return (
        <section className={styles["product"]}>
            <Container extensionClass={styles["product__container"]}>
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    isError && <p>Error...</p>
                }
                <div className={styles["product__img-wrap"]}>
                    <img
                        src={product?.thumbnail}
                        alt={`Изображение товара ${product?.title}`}
                        className={styles["product__img-main"]}
                        width={520}
                        height={520}
                        loading="lazy"
                    />
                    {
                        product?.images && product?.images.length > 1 &&

                      <ul className={styles["product__img-list"]}>
                          {
                              product?.images.map((item, index) =>
                                  <li className={styles["product__img-item"]} key={`img-${index}`}>
                                      <img
                                          src={item}
                                          alt={`Изображение товара ${product?.title}`}
                                          className={styles["product__img"]}
                                          width={70}
                                          height={70}
                                          loading="lazy"
                                      />
                                  </li>
                              )
                          }
                      </ul>
                    }
                </div>
                <div className={styles["product__text-wrap"]}>
                    <Title title={product?.title} extensionClass={styles["product__title"]} />
                    <div className={styles["product__meta-wrap"]}>
                        <Rating rating={product?.rating} />
                        <p className={styles["product__meta"]}>{product?.tags.join(", ")}</p>
                    </div>
                    <p className={styles["product__stock"]}>In Stock - Only {product?.stock} left!</p>
                    <p className={styles["product__description"]}>
                        {product?.description}
                    </p>
                    <div className={styles["product__other-wrap"]}>
                        <p className={styles["product__other"]}>{product?.warrantyInformation}</p>
                        <p className={styles["product__other"]}>{product?.shippingInformation}</p>
                    </div>
                    <div className={styles["product__buy"]}>
                        <div className={styles["product__price"]}>
                            <p className={styles["product__new-price"]}>${discountPrice}</p>
                            <p className={styles["product__old-price"]}>${product?.price}</p>
                        </div>
                        <p className={styles["product__discount"]}>
                            Your discount: <span
                            className={styles["product__percent"]}
                        >{product?.discountPercentage}%</span>
                        </p>
                        {
                            quantity ? <AddedControl defaultCount={quantity} />
                                : <Button text="Add to cart" />
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}