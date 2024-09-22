import Presentation from "../../molecules/Presentation/Presentation.tsx";
import Catalog from "../../organisms/Catalog/Catalog.tsx";
import Faq from "../../organisms/Faq/Faq.tsx";

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