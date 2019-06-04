import React, { PureComponent } from "react";
import {Query} from 'react-apollo';
import { GraphQlClient } from '../../../middleware';
import gql from "graphql-tag";


interface Data {
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
  constructor(props: {}) {
    super(props);
  }

  public render() {
    if (!this.props){
      return "Loading...";
    }
    return (
        <div>
          <h1>Countries</h1>
                <Query<Data,{}> query={CountriesQuery} client={GraphQlClient}>
                {({loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>{error.message}</p>;
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
