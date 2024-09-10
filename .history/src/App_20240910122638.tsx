import './App.scss'
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Catalog from './components/Catalog/Catalog';
import Product from './components/Product/Product';

export default function App() {  

  return (
    <>
     <Header />
     <Routes>
                <Route path="/" element={<Catalog/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/favourites" element={<Product/>} />

            </Routes>
     <Footer />
    </>
  )
}


