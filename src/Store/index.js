import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../Reducers';
import GaLogger from './GALogger';

let middleware = [thunkMiddleware];
if (process.env.REACT_APP_LOGGING === 'true') {
  const loggerMiddleware = createLogger({
    collapsed: true,
  });
  middleware = [...middleware, loggerMiddleware, GaLogger];
}

export default createStore(
  rootReducer,
  applyMiddleware(...middleware),
);
