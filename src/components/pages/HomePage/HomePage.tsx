import styles from "./HomePage.module.scss";
import Presentation from "../../molecules/Presentation/Presentation";
import Catalog from "../../organisms/Catalog/Catalog";
import Faq from "../../organisms/Faq/Faq";

export default function Home() {
    return (
        <section className={styles["home"]} >
            <h1 className="visually-hidden">Главная страница сайта Goods4you</h1>
            <Presentation />
            <Catalog />
            <Faq />
        </section>
    )
}