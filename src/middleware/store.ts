import { History } from "history";
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { localizeReducer } from 'react-localize-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
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
    application,
    form: formReducer
})

export function configureStore(history: History, preloadedState: any = {}) {
  return createStore(
    reducers(history),
    preloadedState,
    composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk, Interceptor)
  ));
}
