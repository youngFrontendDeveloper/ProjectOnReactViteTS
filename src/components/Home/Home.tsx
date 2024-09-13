// import React from "react"
// import styles from "./Home.module.scss"
import Presentation from "../Presentation/Presentation.tsx";
import Catalog from "../Catalog/Catalog.tsx";
import Faq from "../Faq/Faq.tsx";

export default function Home() {
    return (
        <>
            <Presentation />
            <Catalog />
            <Faq />
        </>
    )
}