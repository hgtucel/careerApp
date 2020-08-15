import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {
  adDetailsReducer,
  adListReducer,
  categoryAdListReducer,
} from './reducers/adReducers';
import thunk from 'redux-thunk';
import {categoryListReducer} from './reducers/categoryReducer';

const reducer = combineReducers({
  adListReducer,
  adDetailsReducer,
  categoryAdListReducer,
  categoryListReducer,
});
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
