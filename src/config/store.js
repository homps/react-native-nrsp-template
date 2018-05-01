import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import reducers from '../reducers';
import rootSaga from '../sagas/saga';

// Use redux-persist-filesystem-storage so we don't have to worry about storage size limitations
const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: ['remote'] // pick a part of the store that won't be persisted
};
const persistedReducer = persistReducer(persistConfig, reducers);

//saga for async http gets etc, this gets injected as middleware into redux
const sagaMiddleware = createSagaMiddleware();

// add in a dev mode logger to the store middlewares
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

//create the redux store with the reducers to perform state amendments and middleware to inject saga and loggers.
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
