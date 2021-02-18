import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducers/reducer';
import createSagaMiddleaare from 'redux-saga';
import saga from '../saga/saga';

const sagaMiddleware=createSagaMiddleaare();


const store=createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
export default store;