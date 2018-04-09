import { combineReducers } from 'redux';
import site from './site.js'
import drinks from './drinks.js'

export default combineReducers({
  drinks:drinks,
  site: site
});