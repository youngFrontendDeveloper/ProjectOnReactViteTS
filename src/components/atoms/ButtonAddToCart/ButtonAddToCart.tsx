import styles from "./ButtonAddToCart.module.scss";

interface ButtonAddToCartProps {
  extensionClass?: string;
  fn: () => void;
}

export default function ButtonAddToCart({ extensionClass, fn }: ButtonAddToCartProps) {
  return (
    <button
      type="button"
      className={`${styles["btn"]} ${extensionClass}`}
      aria-label="Cart"
      onClick={fn}
    >
      <img src="/images/cart-icon.svg" aria-hidden="true" width={18} height={18} loading="lazy" />
    </button>
  );
}
