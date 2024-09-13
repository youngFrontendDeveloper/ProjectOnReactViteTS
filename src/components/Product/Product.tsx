import styles from "./Product.module.scss";
import Title from "../Title/Title.tsx";
import Container from "../Container/Container.tsx";
import Button from "../Button/Button.tsx";

export default function Product() {
    return (
        <section className={styles["product"]}>
            <Container extensionClass={styles["product__container"]}>
                <div className={styles["product__img-wrap"]}>
                    <img src="/images/product1.jpg" alt="Изображение товара" className={styles["product__img-main"]} />
                    <ul className={styles["product__img-list"]}>
                        <li className={styles["product__img-item"]}><img
                            src="/images/product1.jpg" alt="Изображение товара" className={styles["product__img"]}
                        />
                        </li>
                        <li className={styles["product__img-item"]}><img
                            src="/images/product1.jpg" alt="Изображение товара" className={styles["product__img"]}
                        />
                        </li>
                        <li className={styles["product__img-item"]}><img
                            src="/images/product1.jpg" alt="Изображение товара" className={styles["product__img"]}
                        />
                        </li>
                        <li className={styles["product__img-item"]}><img
                            src="/images/product1.jpg" alt="Изображение товара" className={styles["product__img"]}
                        />
                        </li>
                        <li className={styles["product__img-item"]}><img
                            src="/images/product1.jpg" alt="Изображение товара" className={styles["product__img"]}
                        />
                        </li>
                        <li className={styles["product__img-item"]}><img
                            src="/images/product1.jpg" alt="Изображение товара" className={styles["product__img"]}
                        />
                        </li>
                    </ul>
                </div>
                <div className={styles["product__text-wrap"]}>
                    <Title title="Essence Mascara Lash Princess" extensionClass={styles["product__title"]} />
                    <div className={styles["product__meta-wrap"]}>
                        <div className={styles["product__rating"]}>
                            <img src="/images/star-icon.svg" aria-label="star" width={20} height={20} />
                            <img src="/images/star-icon.svg" aria-label="star" width={20} height={20} />
                            <img src="/images/star-icon.svg" aria-label="star" width={20} height={20} />
                            <img src="/images/star-icon.svg" aria-label="star" width={20} height={20} />
                            <img src="/images/star-icon-gr.svg" aria-label="star" width={20} height={20} />
                        </div>
                        <p className={styles["product__meta"]}>electronics, selfie accessories</p>
                    </div>
                    <p className={styles["product__stock"]}>In Stock - Only 5 left!</p>
                    <p className={styles["product__description"]}>
                        The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening
                        effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className={styles["product__other-wrap"]}>
                        <p className={styles["product__other"]}>1 month warranty</p>
                        <p className={styles["product__other"]}>Ships in 1 month</p>
                    </div>
                    <div className={styles["product__buy"]}>
                        <div className={styles["product__price"]}>
                            <p className={styles["product__new-price"]}>$7.17</p>
                            <p className={styles["product__old-price"]}>$9.99</p>
                        </div>
                        <p className={styles["product__discount"]}>
                            Your discount: <span className={styles["product__percent"]}>14.5%</span>
                        </p>
                        <Button text="Add to cart" />
                    </div>
                </div>
            </Container>
        </section>
    )
}