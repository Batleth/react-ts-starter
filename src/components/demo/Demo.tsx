import React, { PureComponent } from "react";
import { Switch, Route, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Todos, ExchangeRates, Countries, ContactPage, LanguageSwitch, NavChild} from ".";

interface IProps extends RouteComponentProps<{}> {
}
class Demo extends PureComponent<IProps> {
  public render() {
    if (!this.props){
      return "Loading...";
    }

    return (
        <div>
            <Link to="/demo/redux">Redux</Link><br/>
            <Link to="/demo/form">Redux Form</Link><br/>
            <Link to="/demo/i18n">I18n (Translation)</Link><br/>
            <Link to="/demo/rest">Rest</Link><br/>
            <Link to="/demo/graphql">GraphQL</Link><br/>
            <Link to="" onClick={() => this.props.history.goBack()}>Go Back</Link><br/>
            <Link to="" onClick={() => this.props.history.goForward()}>Go Forward</Link><br/>
            <Link to="/demo/child/param?search=true#hash">Navigate with Param, Hash and Search</Link><br/>

          <Switch>
            <Route path="/demo/rest" component={ExchangeRates} />
            <Route path="/demo/redux" component={Todos}></Route>
            <Route path="/demo/graphql" component={Countries}></Route>
            <Route path="/demo/form" component={ContactPage}></Route>
            <Route path="/demo/i18n" component={LanguageSwitch}></Route>
            <Route path="/demo/child/:requiredParam" component={NavChild}></Route>
          </Switch>
        </div>
    );
  }
};

export default Demo;
