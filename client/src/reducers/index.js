import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import users from './userReducer'
import { locationReducer } from 'redux-history';





// Combine all reducers
const rootReducer = combineReducers({ users, router })
  location: locationReducer
export default rootReducer
