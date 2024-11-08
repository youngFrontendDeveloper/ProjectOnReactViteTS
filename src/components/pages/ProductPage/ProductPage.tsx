import styles from "./ProductPage.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../atoms/Title/Title";
import Container from "../../templates/Container/Container";
import Button from "../../atoms/Button/Button";
import { useGetProductByIdQuery } from "../../../redux/services/products/productsApi";
import Rating from "../../molecules/Rating/Rating";
import AddedControl from "../../molecules/AddedControl/AddedControl";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Meta from "../../../utilites/Meta/Meta";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ProductImagesGallery from "../../organisms/ProductImagesGallery/ProductImagesGallery";
import Loading from "../../molecules/Loading/Loading";
import { updateProductsInCart } from "../../../redux/features/cart/cartSlice";
import Error from "../../atoms/Error/Error";

interface ProductData {
  cartId: number;
  products: { id: number; quantity: number }[];
}

export default function ProductPage() {
  const [responseError, setResponseError] = useState("");
  const params = useParams();
  const id = params.id || "";
  const { data: product, isError, isLoading } = useGetProductByIdQuery(id);
  const discountPrice = product?.price
    ? (product?.price - (product?.price * product?.discountPercentage) / 100).toFixed(2)
    : 0;
  const { cart } = useAppSelector((state) => state.cart);
  const quantity = cart?.products?.find((item) => item.id === product?.id)?.quantity;
  const dispatch = useAppDispatch();

  const handleClickAddToCart = async () => {
    let data: ProductData = {
      cartId: 0,
      products: [],
    };
    if (cart && product) {
      data = {
        cartId: cart.id,
        products: [
          ...cart.products,
          {
            id: product.id,
            quantity: 1,
          },
        ],
      };
    }
    const res = await dispatch(updateProductsInCart(data));

    if (res && res.error) {
      setResponseError(res.payload);

      const timer = setTimeout(() => {
        setResponseError("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  };

  return (
    <section className={styles["product"]}>
      <Meta
        title={`${product?.title} | Goods4you`}
        description="Any products from famous brands with worldwide delivery"
      />
      <Container extensionClass={styles["product__container"]}>
        {isLoading && <Loading />}
        {isError && (
          <>
            <Meta title="Not found | Goods4you" description="Product not found" />
            <NotFoundPage />
          </>
        )}
        {product && (
          <>
            <ProductImagesGallery
              title={product?.title}
              main={product?.thumbnail}
              images={product?.images}
            />

            <div className={styles["product__text-wrap"]}>
              <Title title={product?.title} extensionClass={styles["product__title"]} />
              <div className={styles["product__meta-wrap"]}>
                <Rating rating={product?.rating} />
                <p className={styles["product__meta"]}>{product?.tags.join(", ")}</p>
              </div>
              <p className={styles["product__stock"]}>In Stock - Only {product?.stock} left!</p>
              <p className={styles["product__description"]}>{product?.description}</p>
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
                  Your discount:{" "}
                  <span className={styles["product__percent"]}>{product?.discountPercentage}%</span>
                </p>
                {quantity ? (
                  <AddedControl stock={product?.stock} id={product?.id} defaultCount={quantity} />
                ) : (
                  <Button type="button" text="Add to cart" fn={handleClickAddToCart} />
                )}
                {responseError && <Error><p>{responseError}</p></Error>}
              </div>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
