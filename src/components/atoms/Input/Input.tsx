import styles from "./Input.module.scss";

interface InputProps {
  type: string,
  placeholder: string;
  extensionClass?: string;
  err?: string;
  fn?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, placeholder, extensionClass, err, fn }: InputProps) {
  return (
    <div className={extensionClass}>
      <input
        type={type}
        className={`${styles["input"]} `}
        placeholder={placeholder}
        onChange={fn}
      />
      {err && <p className={styles["input__error"]}>{err}</p>}
    </div>
  );
}
