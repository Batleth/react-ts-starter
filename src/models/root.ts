import { LocalizeState } from 'react-localize-redux';
import { RouterState } from 'connected-react-router';
import { UIState } from './ui';
import { TodosState } from './todo';

export interface Application {
    ui: UIState
    todo: TodosState;
}

export interface IRootState {
    router: RouterState;
    localize: LocalizeState;
    application: Application;
}