import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { theme } from 'styles/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer autoClose={1000} />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
