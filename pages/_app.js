import "../styles/globals.css";
import Header from "../components/layout/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="border-b">
        <Header />
      </div>
      <div className="pt-[59px]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
