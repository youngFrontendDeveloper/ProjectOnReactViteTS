import styles from "./Form.module.scss";

export default function Form({children}: {children: React.ReactNode}) {
  return (
    <form className={styles["form"]}>
      {children}
    </form>
  );
}