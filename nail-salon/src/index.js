import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components-js/app';
import { Link, Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Order from './components-js/order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <> 
        <BrowserRouter>
            <Routes>
                <Route path='/order' element={<Order/>}/>
                <Route index element={<App/>}/> 
            </Routes>
        </BrowserRouter>
    </>
);

