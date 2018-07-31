import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {batchedSubscribe} from 'redux-batched-subscribe';
import thunk from 'redux-thunk';
import {article} from './article/Article.reducer';

const enhancer = compose(
    applyMiddleware(thunk),
    batchedSubscribe((notify) => {
        notify();
    })
);

export const store = createStore(combineReducers({
    article
}), {}, enhancer);