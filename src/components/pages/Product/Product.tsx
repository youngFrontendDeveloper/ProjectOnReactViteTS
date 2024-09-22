import styles from "./Product.module.scss";
import {useParams} from "react-router-dom";
import Title from "../../atoms/Title/Title.tsx";
import Container from "../../templates/Container/Container.tsx";
import Button from "../../atoms/Button/Button.tsx";
import {useGetProductByIdQuery} from "../../../redux/services/products/productsApi.ts";
import Rating from "../../molecules/Rating/Rating.tsx";
import AddedControl from "../../molecules/AddedControl/AddedControl.tsx";
import {useAppSelector} from "../../../redux/hooks.ts";
import Meta from "../../../utilites/Meta/Meta.tsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.tsx";
import ProductImagesGallery from "../../organisms/ProductImagesGallery/ProductImagesGallery.tsx";


export default function Product() {
    const params = useParams();
    const id = params.id || "";
    const {data: product, isError, isLoading} = useGetProductByIdQuery(id);
    const discountPrice = product?.price ? (product?.price - (product?.price * product?.discountPercentage / 100)).toFixed(2) : 0;
    const {cart} = useAppSelector(state => state.cart)
    const quantity = cart?.products?.find(item => item.id === product?.id)?.quantity;
  
    return (
        <section className={styles["product"]}>
            <Meta
                title={`${product?.title} | Goods4you`}
                description="Any products from famous brands with worldwide delivery"
            />
            <Container extensionClass={styles["product__container"]}>
                {
                    isLoading && <p>Loading...</p>
                }
                {
                    isError &&
                  <>
                    <Meta
                      title="Not found | Goods4you"
                      description="Product not found"
                    />
                    <NotFoundPage />
                  </>
                }
                {
                    product &&
                  <>
                    <ProductImagesGallery title={product?.title} main={product?.thumbnail} images={product?.images} />

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
                  </>
                }
            </Container>
        </section>
    )
}