import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Outlet } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* <Outlet /> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
