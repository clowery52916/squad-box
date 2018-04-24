import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import users from './userReducer'
import comment from './commentReducer'
import post from './postReducer'
import { locationReducer } from 'redux-history';
import registerReducer from './register-reducer';
import recognizeReducer from './recognize-reducer';




// Combine all reducers
const rootReducer = combineReducers
  ({
    regData: registerReducer,
    detData: recognizeReducer,
 users, comment, post, router})
  location: locationReducer

export default rootReducer
