import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = 'http://localhost:4000/graphql';

export const creatApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: uri,
        }),
        cache: new InMemoryCache(),
    }) 
}