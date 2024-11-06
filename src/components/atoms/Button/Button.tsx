import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  extensionClass?: string;
  fn?: () => void;
}

export default function Button({ type, text, extensionClass, fn }: ButtonProps) {

  return (
    <button type={type} className={`${styles["button"]} ${extensionClass}`} onClick={fn}>
      {text}
    </button>
  );
}
