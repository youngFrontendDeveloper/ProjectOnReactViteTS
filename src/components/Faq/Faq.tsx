import styles from "./Faq.module.scss";
import Container from "../Container/Container.tsx";
import Title from "../Title/Title.tsx";
import Accordion from "../Accordion/Accordion.tsx";
// import React from "react";

const accordionItems = [
    {
        title: "How can I track the status of my order?",
        content: "After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the \"My Orders\" section to track your delivery status."
    },
    {
        title: "What payment methods do you accept?",
        content: "After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the \"My Orders\" section to track your delivery status."
    },
    {
        title: "How can I return or exchange an item?",
        content: "After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the \"My Orders\" section to track your delivery status."
    },
]

export default function Faq() {
    return (
        <section className={styles["faq"]} id="faq">
            <Container extensionClass="">
                <Title title="Faq" extensionClass={styles["faq__title"]} />
                <Accordion items={accordionItems} />
            </Container>
        </section>
    )
}
