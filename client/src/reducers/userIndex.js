import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router
import users from './userIndex'
import posts from './postReducer'
import comments from './commentReducer'
import { locationReducer } from 'redux-history';





// Combine all reducers
const rootReducer = combineReducers({ users, posts, comments, visiblity, location, router })

  ({userIndex,
    postReducer,
    commentReducer,
    visiblity,
    routing: routerReducer,
    location: locationReducer})
export default rootReducer
