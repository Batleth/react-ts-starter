import React, { PureComponent, ChangeEvent } from "react";
import { map } from 'lodash';
import { ExchangeRatesAPI } from "../../../middleware";

type Currency = {
    [name: string]: number;
}

interface IState {
    rates?: [Currency];
    base: string;
    date?: string;
}

class ExchangeRateList extends PureComponent<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {base: 'EUR'};
  }
  componentDidMount(){
      ExchangeRatesAPI.get('/latest?base='+this.state.base).then( res => this.setState({date: res.data.date, rates: res.data.rates}));
  }
  public render() {
    if (!this.state.rates){
      return "Loading...";
    }
    if (!this.state.date){
        return "Loading...";
      }
    return (
        <div>
        <h3>Exchange Rates for {this.state.date} </h3>
        <ul>
            {
                map( this.state.rates, (rate, index) => {
                    return (
                        <li key={index}>1 {this.state.base} = {rate} {index}</li>
                    )
                })
            }
        </ul>
        </div>
    );
  }
};

export const ExchangeRates =ExchangeRateList;
