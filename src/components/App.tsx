import React, { SFC } from "react";
import { Switch, Route } from "react-router";
import { Translate } from "react-localize-redux";
import Demo from "./demo/Demo"
import { Link } from "react-router-dom";

const NotFound: SFC = () => <div><Translate id="404"/></div>;

export const App : SFC = () => {
  return (
    <div style={{padding: "2%"}}>
        <Switch>
          <Route path="/demo" component={Demo}/>
          <Route exact path="/"><Link to="/demo">Go to Component Demos</Link></Route>
          <Route component={NotFound} />
        </Switch>
      </div>
  );
};


