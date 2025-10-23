import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';   // ⬅️ add this
import { store } from './app/store.js';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/arweb">   {/* ⬅️ important for GH Pages */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
