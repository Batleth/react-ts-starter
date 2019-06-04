import { Middleware } from 'redux';
import { LOCATION_CHANGE } from 'connected-react-router';

export const Interceptor: Middleware = store => next => (action) => {

    if (action.type === LOCATION_CHANGE) {
        console.log(action.payload.location.pathname);
    }

    return next(action);
};
