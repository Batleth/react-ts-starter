import React, { PureComponent } from "react";
import { Switch, Route } from "react-router";
import { Todos } from "./redux";
import { ExchangeRates } from "./rest";
import { Countries } from "./graphql";
import { ContactPage } from "./redux-form";
import { LanguageSwitch } from "./i18n";

const Demo = (
        <div>
          <Switch>
            <Route path="/demo/rest" component={ExchangeRates} />
            <Route path="/demo/redux" component={Todos}></Route>
            <Route path="/demo/graphql" component={Countries}></Route>
            <Route path="/demo/form" component={ContactPage}></Route>
            <Route path="/demo/i18n" component={LanguageSwitch}></Route>
          </Switch>
        </div>
    );

export default Demo;
