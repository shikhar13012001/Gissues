import { Container } from "@mui/material";
import "../styles/globals.css";
import "../styles/prism.css";
import NavBar from "../components/NavBar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function MyApp({ Component, pageProps }) {
  const URI = "https://api.github.com/graphql";
  const httpLink = createHttpLink({
    uri: URI,
  });
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = "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";
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <Container sx={{ mt: 3 }}>
      <NavBar />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  );
}

export default MyApp;
