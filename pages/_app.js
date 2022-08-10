import "../styles/globals.css";
import Header from "../components/layout/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="border-b">
        <Header />
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
