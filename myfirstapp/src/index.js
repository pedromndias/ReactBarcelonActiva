import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import App from './components/App';
import Rutes from "./components/Rutes.js"
import Refugis from "./components/Refugis.js"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from './components/MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-primary card'>
        <Header />
    </div>
    <div className='card'>
      <nav>
        <ul className='nav nav-pilss'>
          <li className='nav-item'>
            <a href='/' className='nav-link'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/Refugis' className='nav-link'>Refugis</a>
          </li>
          <li className='nav-item'>
            <a href='/Rutes' className='nav-link'>Rutes</a>
          </li>
          <li className='nav-item'>
            <a href='/contacta' className='nav-link'>Contacta</a>
          </li>
        </ul>
      </nav>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/refugis" element={<Refugis/>} >
          <Route path=":id" element={<Refugis/>} />
        </Route>
        <Route path="/rutes" element={<Rutes/>} />
        <Route path="/contacta" element={<MyForm/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
