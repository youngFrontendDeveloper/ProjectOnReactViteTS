import styles from "./Accordion.module.scss";
import AccordionItem from "../AccordionItem/AccordionItem.tsx";

const accordionItems = [
    {
        title: "How can I track the status of my order?",
        content: "After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the \"My Orders\" section to track your delivery status.",
        isOpen: true
    },
    {
        title: "What payment methods do you accept?",
        content: "After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the \"My Orders\" section to track your delivery status.",
        isOpen: false
    },
    {
        title: "How can I return or exchange an item?",
        content: "After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the \"My Orders\" section to track your delivery status.",
        isOpen: false
    },
]

export default function Accordion() {

    return (
        <div className={styles["accordion"]}>

            {
                accordionItems.map((item, index) => (
                    <AccordionItem item={item} key={`accordion-${index}`} />
                ))
            }
        </div>
    );
};

