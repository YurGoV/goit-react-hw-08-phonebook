import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";


import {App} from 'components/App';
import {Provider} from "react-redux";
import {store} from "./redux/store";

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='goit-react-hw-08-phonebook'>
    <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
