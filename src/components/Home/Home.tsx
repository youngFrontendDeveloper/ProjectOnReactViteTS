import Presentation from "../Presentation/Presentation.tsx";
import Catalog from "../Catalog/Catalog.tsx";
import Faq from "../Faq/Faq.tsx";

export default function Home() {
    return (
        <>
            <h1 className="visually-hidden">Главная страница сайта Goods4you</h1>
            <Presentation />
            <Catalog />
            <Faq />
        </>
    )
}