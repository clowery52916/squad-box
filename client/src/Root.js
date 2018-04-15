import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { connectHistory } from 'redux-history';
import configureStore from './configureStore.js'
//routing to my componenents
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import NewsFeed from './components/NewsFeed'
import SingleUser from './components/SingleUser'
import RegisterUserFace from './components/RegisterUserFace'
import Posts from './components/Posts'


const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path='/users' component={NewsFeed}/>
        <Route exact path='/users/:id' component={SingleUser}/>
        <Route exact path='/users/user_id/posts/:id' component={Posts} />

      </div>
      </ConnectedRouter>
    </Provider>
      )
export default Root;
