import React, { SFC } from "react";
import { Switch, Route } from "react-router";
import { Translate } from "react-localize-redux";
import Demo from "./demo/Demo"

const NotFound: SFC = () => <div><Translate id="404"/></div>;

export const App : SFC = () => {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={NotFound} />
          <Route path="/demo" component={Demo}/>
          <Route component={NotFound} />
        </Switch>
      </div>
  );
};


