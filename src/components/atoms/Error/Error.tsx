import styles from "./Error.module.scss";

interface ErrorProps {
  children: React.ReactNode,
}
export default function Error({ children }: ErrorProps) {
  return <div className={styles["error"]}>{children}</div>;
}


// export default function Error({ responseError }: { responseError: string }) {
//   return <div className={styles["error"]}>Error: {responseError}</div>;
// }
