import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducer/authreducer';
import courseReducer from './reducer/coursereducer';
import quizReducer from './reducer/quizreducer';
import errorReducer from './reducer/errorreducer';
import logger from 'redux-logger';

const RouteReducer = combineReducers({ authReducer, courseReducer, quizReducer, errorReducer })

function configureStore() {
    return createStore(RouteReducer, {}, applyMiddleware(thunk, logger));
}

const store = configureStore();
export default store;