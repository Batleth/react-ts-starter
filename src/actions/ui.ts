import { AnyAction } from 'redux';
import { UIActionType } from './ActionTypes';

export const startLoading = (): AnyAction => ({
    type: UIActionType.LOADING_START,
});

export const finishLoading = (): AnyAction => ({
    type: UIActionType.LOADING_FINISHED,
});
