import styles from "./Faq.module.scss";
import Container from "../../templates/Container/Container";
import Title from "../../atoms/Title/Title";
import Accordion from "../Accordion/Accordion";

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
