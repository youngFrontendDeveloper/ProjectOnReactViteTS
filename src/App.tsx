import styles from './App.module.scss'
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product';
import CartPage from './components/CartPage/CartPage';
import Home from "./components/Home/Home.tsx";
import Catalog from "./components/Catalog/Catalog.tsx";

export default function App() {

    return (
        <>
            <Header />
            <main className={styles['main']}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Catalog />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path="/cart" element={<CartPage />} />

                </Routes>
            </main>
            <Footer />
        </>
    )
}


