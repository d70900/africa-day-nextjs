import '../styles/main.css';
import '../styles/style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
