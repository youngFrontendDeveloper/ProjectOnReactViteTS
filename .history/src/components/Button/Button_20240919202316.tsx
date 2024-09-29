import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    extensionClass?: string;
    fn?: () => {}
}

export default function Button({text, extensionClass, fn}: ButtonProps) {
    return (
        <button
            type="button"
            className={`${styles["button"]} ${extensionClass}`}
            onClick={fn}
        >
            {text}
        </button>
    )
}