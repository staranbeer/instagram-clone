import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className="pt-[59px] bg-gray-100 pb-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
