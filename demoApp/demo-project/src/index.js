import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,RouterProvider,Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './component/todo/redux/store';
import { Provider } from 'react-redux';

import MainLayout from './component/Header';
import SportPage from './component/Sport';
import AboutUsPage from './component/AboutUs';
import HomePage from './component/Home';
import MainPage from './component/MainPage';
import NotFound from './component/NotFound';
import Invoices from './component/Invoices';
import Invoice from './component/Invoice';
import Weather from './component/weather/Weather';
import Weather_useXHR from './component/weather/Weather_useXHR';
import Weather_useFetch from './component/weather/Weather_useFetch';
import View from './component/todo/view/view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />}>
              <Route path='sport' element={<SportPage/>} />
              <Route path='aboutus' element={<AboutUsPage/>} />
              <Route path='weather' element={<Weather/>} />
              <Route path='weatherXhr' element={<Weather_useXHR/>} />
              <Route path='weatherF' element={<Weather_useFetch/>} />
              <Route path='view' element={<View />} />


              <Route index element={<HomePage />} />

              <Route path='invoices' element={<Invoices/>}>
                <Route path=':invoiceId'  element={<Invoice/>} />
              </Route>

            </Route>
            <Route path='*' element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
