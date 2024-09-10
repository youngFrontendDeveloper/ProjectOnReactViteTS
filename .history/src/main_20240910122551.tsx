import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
import './index.scss'


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
