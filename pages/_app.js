// react multi carousel styles
import "react-multi-carousel/lib/styles.css";
// ant design styles 
import 'antd/dist/antd.css'
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from "../client"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </ApolloProvider>
}

export default MyApp
