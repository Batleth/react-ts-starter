import React, { PureComponent } from "react";
import { Switch, Route } from "react-router";
import { Todos } from "./redux";
import { ExchangeRates } from "./rest";
import { Countries } from "./graphql";

class Demo extends PureComponent<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    if (!this.props){
      return "Loading...";
    }
    return (
        <div>
          <Switch>
            <Route path="/demo/rest" component={ExchangeRates} />
            <Route path="/demo/redux" component={Todos}></Route>
            <Route path="/demo/graphql" component={Countries}></Route>
          </Switch>
        </div>
    );
  }
};

export default Demo;
