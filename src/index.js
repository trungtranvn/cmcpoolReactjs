import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import Signin1 from './compoments/Signin1';
import Home from './compoments/home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><React.StrictMode>
    <App />
  </React.StrictMode><BrowserRouter>
      <Routes>
        <Route path='/login' element={<Signin1 />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
