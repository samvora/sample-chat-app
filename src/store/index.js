import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from '../middlewars/logger';
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger)
    );
}