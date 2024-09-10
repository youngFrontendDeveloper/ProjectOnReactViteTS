import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.scss'
import Catalog from './components/Catalog/Catalog.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Catalog/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
