import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fafafa',
      main: '#25c296',
      dark: '#25c296',
      contrastText: 'white',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#3b5988',
      contrastText: '#4285F4',
    },
    typography: {
      fontSize: '1.2rem',
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
