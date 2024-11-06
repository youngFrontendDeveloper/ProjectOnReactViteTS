import styles from "./HomePage.module.scss";
import Presentation from "../../molecules/Presentation/Presentation";
import Catalog from "../../organisms/Catalog/Catalog";
import Faq from "../../organisms/Faq/Faq";

export default function Home() {
  return (
    <section className={styles["home"]}>
      <h1 className="visually-hidden">Goods4you website Home Page</h1>
      <Presentation />
      <Catalog />
      <Faq />
    </section>
  );
}
