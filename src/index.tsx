import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AnyAction, Store } from "redux";
import { Provider } from "react-redux";
import { LocalizeProvider } from "react-localize-redux";
import { ApolloProvider } from "react-apollo";
import { CssBaseline, Theme } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { configureStore, configureTheme, I18n, GraphQlClient } from './middleware';
import { App } from './components/App';

interface ApplicationState {
  store: Store<any, AnyAction>;
  theme: Theme;
  history: History<any>;
}
class Init extends PureComponent<{}, ApplicationState>{
  constructor(props: {}){
    super(props);

    const history = createBrowserHistory();

    this.state = {
      store: configureStore(history),
      theme: configureTheme(),
      history
    }
  }
  public render(){
      return(
        <Provider store={this.state.store}>
            <LocalizeProvider store={this.state.store}>
            <ApolloProvider client={GraphQlClient}>
                <ConnectedRouter history={this.state.history}>
                    <ThemeProvider theme={this.state.theme}>
                        <CssBaseline>
                            <I18n>
                                <App/>
                            </I18n>
                        </CssBaseline>
                    </ThemeProvider>
                </ConnectedRouter>
                </ApolloProvider>
            </LocalizeProvider>
        </Provider>
      );
  }
}

ReactDOM.render(<Init />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
