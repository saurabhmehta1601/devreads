// react multi carousel styles
import "react-multi-carousel/lib/styles.css";
// ant design styles
import "antd/dist/antd.css";
import "../styles/globals.css";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import client from "../GraphQL/client";
import { Header, Footer } from "../components/exports";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </Head>
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ReduxProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
