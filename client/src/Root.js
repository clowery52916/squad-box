import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore.js'
import LandingPage from './components/LandingPage'
import reducer from './reducers'
import UserComponent from './components/UserComponent'


const store = configureStore(history)
console.log(store)

const history = createHistory()
const Root = () => (
  <Provider store={store}>

    <ConnectedRouter history={history}>
      <div>

        <Route exact path="/" component={LandingPage}/>
        <Route path='/users' component={UserComponent}/>
      </div>
      </ConnectedRouter>
    </Provider>
      )
export default Root
