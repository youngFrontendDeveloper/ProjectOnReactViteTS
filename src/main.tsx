import './styles/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App';
import {Provider} from "react-redux";
import { store} from "./redux/store"
// import {persistor, store} from "./redux/store"
// import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
           {/* </PersistGate> */}
        </Provider>
    </StrictMode>,
)
