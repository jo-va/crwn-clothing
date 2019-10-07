import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';

const middlewares = [
  /* logger */
];

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default store;
