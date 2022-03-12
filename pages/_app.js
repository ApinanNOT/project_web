import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header'

import { creatApolloClient } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client"

const apolloClient = creatApolloClient();

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default MyApp
