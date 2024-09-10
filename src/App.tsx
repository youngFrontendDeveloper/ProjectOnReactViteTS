import './App.scss'
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Catalog from './components/Catalog/Catalog';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Home from "./components/Home/Home.tsx";

export default function App() {  

  return (
    <>
     <Header />
     <Routes>
                <Route path="/" element={<Home/>} />
                <Route path={`/product/[id]`} element={<Product/>} />
                <Route path="/cart" element={<Cart/>} />

            </Routes>
     <Footer />
    </>
  )
}


