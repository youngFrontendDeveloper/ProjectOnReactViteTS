import styles from "./Error.module.scss";

export default function Error({ responseError }: { responseError: string }) {
  return <div className={styles["error"]}>Error: {responseError}</div>;
}
