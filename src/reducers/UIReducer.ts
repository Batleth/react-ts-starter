import { AnyAction, Reducer } from 'redux';
import { UIActionType } from '../actions';
import { IUIState } from '../models';

const initial: IUIState = {
    loading: false,
};

export const UIReducer: Reducer<IUIState> = (
    state: IUIState = initial,
    action: AnyAction,
) => {
    switch (action.type) {
        case UIActionType.LOADING_START:
            return { ...state, loading: true };
        case UIActionType.LOADING_FINISHED:
            return { ...state, loading: false };
        default:
            return state;
    }
};
