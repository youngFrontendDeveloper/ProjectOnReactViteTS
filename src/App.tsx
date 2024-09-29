import styles from './App.module.scss'
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product';
import CartPage from './components/CartPage/CartPage';
import Home from "./components/Home/Home.tsx";
import Catalog from "./components/Catalog/Catalog.tsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.tsx";
import Meta from "./components/Meta/Meta.tsx";

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
                            <Meta
                                title="Essence Mascara Lash Princess | Goods4you"
                                description="Any products from famous brands with worldwide delivery"
                            />
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


