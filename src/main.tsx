import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserPage } from './features/user/UserPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserPage />
    </Provider>
  </React.StrictMode>
);
