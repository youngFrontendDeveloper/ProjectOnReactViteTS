import styles from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  extensionClass?: string;
  err?: string;
  fn?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, extensionClass, err, fn }: InputProps) {
  return (
    <div className={extensionClass}>
      <input
        type="text"
        className={`${styles["input"]} `}
        placeholder={placeholder}
        onChange={fn}
      />
      {err && <p className={styles["input__error"]}>{err}</p>}
    </div>
  );
}
