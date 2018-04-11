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
import UserLogin from './components/UserLogin'
import NewsFeed from './components/NewsFeed'
import SingleUser from './components/SingleUser'

const history = createHistory()
const store = configureStore(history)
console.log(store)

const Root = () => (
  <Provider store={store}>

    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path='/user' component={UserLogin}/>
        <Route exact path='/users' component={NewsFeed}/>
        <Route exact path='/users/:userId' component={SingleUser}/>

      </div>
      </ConnectedRouter>
    </Provider>
      )
export default Root;
