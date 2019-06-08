import React, { PureComponent } from "react";
import { Switch, Route, RouteComponentProps } from "react-router";
import { Todos, ExchangeRates, Countries, ContactPage, LanguageSwitch, NavChild} from ".";
import { Button } from "@material-ui/core";

interface IProps extends RouteComponentProps<{}> {
}
class Demo extends PureComponent<IProps> {
  public render() {
    if (!this.props){
      return "Loading...";
    }

    return (
        <div>
            <Button onClick={() => this.props.history.push("/demo/redux")}>Redux</Button><br/>
            <Button onClick={() => this.props.history.push("/demo/form")}>Redux Form</Button><br/>
            <Button onClick={() => this.props.history.push("/demo/i18n")}>I18n</Button><br/>
            <Button onClick={() => this.props.history.push("/demo/rest")}>Rest</Button><br/>
            <Button onClick={() => this.props.history.push("/demo/graphql")}>GraphQL</Button><br/>
            <Button onClick={() => this.props.history.goBack()}>Go Back</Button><br/>
            <Button onClick={() => this.props.history.goForward()}>Go Forward</Button><br/>
            <Button onClick={() => this.props.history.push("/demo/child/param?search=true#hash")}>Navigate with Param, Hash and Search</Button>

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
