import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import {storeCreater} from './store';
import { Provider } from 'react-redux';
let store=storeCreater()
console.log("my Store=",store.getState())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);


