/**
 * Central import for reducers.
 * Each child reducer will be called and their results will be gathered into a single state object, separated by
 *  the keys of the passed reducer functions. This allows us to nicely separate different parts of the app 
 *  into smaller conceptual sections.
 */
import { combineReducers } from 'redux';

import local from './local';
import remote from './remote';

export default combineReducers({
  local,
  remote
});
