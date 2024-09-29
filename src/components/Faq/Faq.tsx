import styles from "./Faq.module.scss";
import Container from "../Container/Container.tsx";
import Title from "../Title/Title.tsx";
import Accordion from "../Accordion/Accordion.tsx";

export default function Faq() {
    return (
        <section className={styles["faq"]} id="faq">
            <Container extensionClass={styles["faq__container"]}>
                <Title title="Faq" extensionClass={styles["faq__title"]} />
                <Accordion />
            </Container>
        </section>
    )
}
