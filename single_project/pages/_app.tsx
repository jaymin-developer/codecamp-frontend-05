import "../styles/globals.css";
import "antd/dist/antd.css";
import {Global} from "@emotion/react"
import {globalStyles} from "../src/commons/styles/globalStyles"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import  Layout  from "../src/components/commons/index"

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} /> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
