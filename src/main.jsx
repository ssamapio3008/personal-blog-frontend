import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme'
import Global from './styles/Global'
import { AuthProvider } from './hooks/AuthContext';
//import { Routes } from './routes/index.routes';

import { Feed } from './pages/Feed';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
        <AuthProvider>
          <Feed />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
