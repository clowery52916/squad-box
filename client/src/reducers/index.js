import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import users from './userReducer'
import comment from './commentReducer'
import post from './postReducer'
import { locationReducer } from 'redux-history';
import recognize from './recognize-reducer'
import register from './register-reducer'
import detect from './detect-reducer'





// Combine all reducers
const rootReducer = combineReducers
({ regData: register,
    detData: recognize,
    users, detect,
    comment, post, router,
  location: locationReducer,
  })

export default rootReducer
