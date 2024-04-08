import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

//context provider
import {Eprovider} from './context/Econtext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Eprovider>
      <App />
      </Eprovider>
    </BrowserRouter>
  </React.StrictMode>
);


