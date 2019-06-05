import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Switch, Route } from "react-router";
import { Todos, ExchangeRates, Countries, ContactPage, LanguageSwitch, NavChild} from ".";
import { Push, push, ConnectedRouterProps, goBack, goForward, GoBack, GoForward } from "connected-react-router";


interface IProps extends ConnectedRouterProps {
  push: Push;
  goBack: GoBack;
  goForward: GoForward
}
class Demo extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    if (!this.props){
      return "Loading...";
    }
    return (
        <div>
          <ul>
            <li><a onClick={() => this.props.push("/demo/redux")}>Redux</a></li>
            <li><a onClick={() => this.props.push("/demo/form")}>Redux Form</a></li>
            <li><a onClick={() => this.props.push("/demo/i18n")}>I18n</a></li>
            <li><a onClick={() => this.props.push("/demo/rest")}>Rest</a></li>
            <li><a onClick={() => this.props.push("/demo/graphql")}>GraphQL</a></li>
            <li><a onClick={() => this.props.goBack()}>Go Back</a></li>
            <li><a onClick={() => this.props.goForward()}>Go Forward</a></li>
            <li><a onClick={() => this.props.push("/demo/child#hash")}/> With hash hash</li>
            <li><a onClick={() => this.props.push("/demo/child?child=true")}/> With query child=true</li>
          </ul>
          <Switch>
            <Route path="/demo/rest" component={ExchangeRates} />
            <Route path="/demo/redux" component={Todos}></Route>
            <Route path="/demo/graphql" component={Countries}></Route>
            <Route path="/demo/form" component={ContactPage}></Route>
            <Route path="/demo/i18n" component={LanguageSwitch}></Route>
            <Route path="/demo/child" component={NavChild}></Route>
          </Switch>
        </div>
    );
  }
};

export default connect(null, {push, goBack, goForward})(Demo);
