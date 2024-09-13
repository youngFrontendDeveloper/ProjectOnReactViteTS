import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    extensionClass?: string
}

export default function Button({text, extensionClass}: ButtonProps) {
    return (
        <button type="button" className={`${styles["button"]} ${extensionClass}`}>
            {text}
        </button>
    )
}