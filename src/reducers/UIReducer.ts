import { AnyAction, Reducer } from 'redux';
import { UIActionType } from '../actions';
import { UIState } from '../models';

const initial: UIState = {
    loading: false,
};

export const UIReducer: Reducer<UIState> = (
    state: UIState = initial,
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
