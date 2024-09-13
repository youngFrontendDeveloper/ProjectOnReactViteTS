// import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import {useState} from "react";


interface AccordionItem  {
    title: string;
    content: string;
};

interface AccordionProps {
    items: AccordionItem[];
};

export default function Accordion({items}: AccordionProps) {
    const [openPanels, setOpenPanels] = useState<boolean[]>(items.map(() => false));
    console.log(openPanels)

    // Функция для открытия/закрытия конкретной панели
    const togglePanel = (index: number): void => {
        const newOpenPanels = [...openPanels];
        newOpenPanels[index] = !newOpenPanels[index];
        setOpenPanels(newOpenPanels);
    };

    // // Функция для открытия всех панелей
    // const openAllPanels = () => {
    //     setOpenPanels(items.map(() => true));
    // };
    //
    // // Функция для закрытия всех панелей
    // const closeAllPanels = () => {
    //     setOpenPanels(items.map(() => false));
    // };

    return (
        <div className={styles["accordion"]}>

            {items.map((item, index) => (
                <div className={styles["accordion__item"]} key={index}>
                    <div className={openPanels[index] ? `${styles["accordion__header-wrap"]} ${styles["accordion__header-wrap--margin"]}` : styles["accordion__header-wrap"] } onClick={() => togglePanel(index)}>
                        <p className={styles["accordion__header"]}>{item.title}</p>
                        <button
                            type="button"
                            className={openPanels[index] ? `${styles["accordion__button"]} ${styles["accordion__button--open"]}` : styles["accordion__button"]}

                            aria-label={`${openPanels[index] ? "Закрыть список" : "Раскрыть список"}`}
                        >
                            <img src="/images/plus-icon.svg" aria-hidden="true" />
                        </button>
                    </div>
                    <p
                        className={openPanels[index] ? `${styles["accordion__content"]} ${styles["open"]}` : `${styles["accordion__content"]}`}
                        // style={{
                        //     maxHeight: openPanels[index] ? "500px" : "0px",
                        //     transition: "max-height 0.4s ease",
                        // }}
                    >
                        {item.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

