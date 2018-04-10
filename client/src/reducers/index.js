import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import userReducer from './userReducer'
import { reducer as formReducer } from 'redux-form'



// Combine all reducers
const rootReducer = combineReducers({ userReducer, formReducer})

export default rootReducer
