import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import users from './userReducer'
import findUserByFace from './findUserByFaceReducer'
import comment from './commentReducer'
import post from './postReducer'
import { locationReducer } from 'redux-history';
import recognize from './recognizeByFaceReducer'
import signUpWithFace from './signUpUserWithFaceReducer'
import savedImage from './savedImageReducer'




// Combine all reducers
const rootReducer = combineReducers
({ users, signUpWithFace, comment, post, router, recognize, findUserByFace, savedImage})
  location: locationReducer

export default rootReducer
