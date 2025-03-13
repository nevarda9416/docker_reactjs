import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from "./context/UserContext";
import Error from "./components/Error";
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <UserProvider>
            <BrowserRouter>
                <Error>
                    <App/>
                </Error>
            </BrowserRouter>
        </UserProvider>
    </React.StrictMode>,
)
// Measure web vitals
reportWebVitals(console.log);