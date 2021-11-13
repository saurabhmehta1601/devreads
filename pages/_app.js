import 'antd/dist/antd.css'
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from "../client"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Header />
    <Component {...pageProps} />
    </ApolloProvider>
}

export default MyApp
