import "../styles/globals.css";
import Header from "../components/layout/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
