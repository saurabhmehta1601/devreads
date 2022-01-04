// react multi carousel styles
import "react-multi-carousel/lib/styles.css";
// ant design styles
import "antd/dist/antd.css";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ReduxProvider>
    </ApolloProvider>
  );
}

export default MyApp;
