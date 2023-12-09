import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={storePersist} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
