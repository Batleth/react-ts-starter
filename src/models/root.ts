import { LocalizeState } from 'react-localize-redux';
import { RouterState } from 'connected-react-router';
import { IUIState } from './ui';
import { ITodosState } from './todo';

export interface IApplication {
    ui: IUIState
    todo: ITodosState;
}

export interface IRootState {
    router: RouterState;
    localize: LocalizeState;
    application: IApplication;
}