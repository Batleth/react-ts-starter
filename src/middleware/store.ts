import { History } from "history";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { localizeReducer } from 'react-localize-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Interceptor } from './interceptor'
import { UIReducer, TodoReducer } from '../reducers';

const application = combineReducers({
    ui: UIReducer,
    todo: TodoReducer,
})

const reducers = (history: History<any>) => combineReducers({
    router: connectRouter(history),
    localize: localizeReducer,
    application: application
})

export function configureStore(history: History, preloadedState: any = {}) {
  return createStore(
    reducers(history),
    preloadedState,
    composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk, Interceptor)
  ));
}
