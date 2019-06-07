import React, { SFC } from "react";
import { Switch, Route } from "react-router";
import { Translate } from "react-localize-redux";
import Demo from "./demo/Demo"

const NotFound: SFC = () => <div><Translate id="404"/></div>;

export const App : SFC = () => {
  return (
    <div style={{padding: "2%"}}>
        <Switch>
          <Route path="/demo" component={Demo}/>
          <Route exact path="/" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
  );
};


