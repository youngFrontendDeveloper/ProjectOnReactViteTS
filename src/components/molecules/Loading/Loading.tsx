import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles["loading"]}>
      <img src="/images/loading.svg" width={64} height={64} loading="lazy" alt="Loading..." />
    </div>
  );
}
