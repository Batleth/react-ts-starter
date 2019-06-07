import React, { PureComponent } from "react";
import {Query} from 'react-apollo';
import { GraphQlClient } from '../../../middleware';
import gql from "graphql-tag";


interface IData {
    countries: Array<{name: string; code: string;}>;
};

const CountriesQuery = gql`
{
    countries {
        code
        name
    }
}
`;

class CountriesContainer extends PureComponent<{}> {
  public render() {
    if (!this.props){
      return "Loading...";
    }
    return (
        <div>
          <h1>Countries</h1>
                <Query<IData,{}> query={CountriesQuery} client={GraphQlClient}>
                {({loading, error, data }) => {
                    if (loading) { return <p>Loading...</p> };
                    if (error) { return <p>{error.message}</p> };
                    const countries = data ? data.countries : [];
                    return (
                        <ul>
                {countries.map((country: any) => (
                <li key={country.code}>
                  {country.code} - {country.name}
                </li>
              ))}
            </ul>
          );
        }}
                </Query>
        </div>
    );
  }
};

export const Countries = CountriesContainer;
