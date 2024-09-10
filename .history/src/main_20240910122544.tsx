import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
import './index.scss'
import Catalog from './components/Catalog/Catalog.tsx';
import Product from './components/Product/Product.tsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Catalog/>,
//   },
//   {
//     path: "/product/[id]",
//     element: <Product/>,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
