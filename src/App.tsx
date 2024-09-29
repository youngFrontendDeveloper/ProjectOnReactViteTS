import styles from './App.module.scss'
import {Routes, Route} from 'react-router-dom';
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import Product from './components/pages/Product/Product';
import CartPage from './components/pages/CartPage/CartPage';
import Home from "./components/pages/Home/Home.tsx";
import Catalog from "./components/organisms/Catalog/Catalog.tsx";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage.tsx";
import Meta from "./utilites/Meta/Meta.tsx";

export default function App() {

    return (
        <>
            <Header />
            <main className={styles['main']}>
                <Routes>
                    <Route
                        path="/" element={
                        <>
                            <Meta
                                title="Catalog | Goods4you"
                                description="Any products from famous brands with worldwide delivery"
                            />
                            <Home />
                        </>
                    }
                    />
                    <Route path="/" element={<Catalog />} />
                    <Route
                        path='/product/:id' element={
                        <>
                            <Product />
                        </>
                    }
                    />
                    <Route
                        path="/cart" element={
                        <>
                            <Meta
                                title="My cart | Goods4you"
                                description="Any products from famous brands with worldwide delivery"
                            />
                            <CartPage />
                        </>
                    }
                    />
                    <Route
                        path="*" element={
                        <>
                            <Meta
                                title="Not found | Goods4you"
                                description="Any products from famous brands with worldwide delivery"
                            />
                            <NotFoundPage />
                        </>
                    }
                    />
                </Routes>
            </main>
            <Footer />
        </>
    )
}


