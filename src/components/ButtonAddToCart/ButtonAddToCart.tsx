import styles from "./ButtonAddToCart.module.scss"

interface ButtonAddToCartProps {
    extensionClass?: string;
}

export default function ButtonAddToCart({extensionClass}: ButtonAddToCartProps) {
    return (
        <button
            type="button"
            className={`${styles["btn"]} ${extensionClass}`}
            aria-label="Корзина"
        >
            <img
                src="/images/cart-icon.svg"
                aria-hidden="true"
                width={18}
                height={18}
            />
        </button>
    )
}