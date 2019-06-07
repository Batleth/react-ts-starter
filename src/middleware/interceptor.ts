import { Middleware } from 'redux';
import { LOCATION_CHANGE } from 'connected-react-router';

export const Interceptor: Middleware = store => next => (action) => {

    if (action.type === LOCATION_CHANGE) {
        // Intercepted now look at path and return next action or dispatch a action
    }

    return next(action);
};
