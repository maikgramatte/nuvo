import { combineReducers } from 'redux';
import { authentication } from './UserReducers';
import { AppStateManager } from './AppReducer';

const rootReducer = combineReducers({
  authentication,
  app: AppStateManager,
});

export default rootReducer;
