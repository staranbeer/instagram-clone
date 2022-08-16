import "../styles/globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "./../components/layout/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="border-b">
        <Header />
      </div>
      <div className="pt-[59px] bg-gray-100 pb-16">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
