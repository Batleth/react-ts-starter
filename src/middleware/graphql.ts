import ApolloClient from "apollo-boost";
import { PresetConfig } from 'apollo-boost';

const GraphQlConfig: PresetConfig = {
    uri: 'https://countries.trevorblades.com',
};

export const GraphQlClient = new ApolloClient(GraphQlConfig);
