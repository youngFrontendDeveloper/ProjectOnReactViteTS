import styles from './App.module.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import CartPage from './components/pages/CartPage/CartPage';
import Catalog from './components/organisms/Catalog/Catalog';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import Meta from './utilites/Meta/Meta';
import ProductPage from './components/pages/ProductPage/ProductPage';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import ProtectedRoute from './components/templates/ProtectedRoute/ProtectedRoute';

export default function App() {  
  const location = useLocation();
 
  return (
    <>
      <Header />
      <main className={styles['main']}>
        <Routes>
          <Route
            path="/"
            element={
               <ProtectedRoute>
                <>
                <Meta
                  title="Catalog | Goods4you"
                  description="Any products from famous brands with worldwide delivery"
                />
                <HomePage />
                </>
                </ProtectedRoute>
            }
          />
          <Route path="/" element={<Catalog />} />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <ProductPage />
                </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                 <>
                <Meta
                  title="My cart | Goods4you"
                  description="Any products from famous brands with worldwide delivery"
                />
                <CartPage />
                </>
                </ProtectedRoute>
            }
          />
           <Route
            path="/login"
            element={
              <>
                <Meta
                  title="Sign in | Goods4you"
                  description="Any products from famous brands with worldwide delivery"
                />
                <LoginPage />
              </>
            }
          />
          <Route
            path="*"
            element={
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
      {
        location.pathname !== '/login' && <Footer />
      }
      
    </>
  );
}
