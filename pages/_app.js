import { ToastContainer } from 'react-toastify';
import '../styles/style.css';
import { ThemeProvider, createTheme } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#D70900',
      },
      action: {
        disabled: '#22222250',
        disabledBackground: '#D7090050',
      },
      text: {
        primary: '#444444',
        secondary: '#7a7a7a',
      },
    },
    typography: {
      htmlFontSize: 16,
      fontSize: 14,
    },
    zIndex: {
      appBar: 1500,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}
