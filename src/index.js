import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store, storePersist } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={storePersist} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
