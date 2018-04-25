import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {connectHistory} from 'redux-history';
import configureStore from './configureStore.js'
//routing to my componenents
import LandingPage from './components/LandingPage'
import LoginForm from './components/users/LoginForm'
import NewsFeed from './components/users/NewsFeed'
import SingleUser from './components/users/SingleUser'
import Posts from './components/posts/Posts'
import PostsForm from './components/posts/PostsForm'
import Register from './components/kairosApi/Register'
import Recognize from './components/kairosApi/Recognize'
import styled from 'styled-components'
import { Route, Switch, Link } from 'react-router-dom';

const history = createHistory()
const store = configureStore(history)
console.log(store)




class Root extends Component {
  state = {
    toggle: false
  };


toggleDrawerMenu() {
  this.setState({
    toggle: !this.state.toggle
  });
}

handleClose() {
  this.setState({toggle: false});
}
render() {
    return (

<Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      {/* <AppBar className='app-bar' title='SquadBox' onLeftIconButtonClick={() => this.toggleDrawerMenu()} zDepth={2}/>
      <Drawer docked={false} width={200} open={this.state.toggle} onRequestChange={(toggle) => this.setState({toggle})}>
        <Link to={'/'} className='link'>
          <MenuItem onClick={() => this.handleClose()}>Home</MenuItem>
        </Link>
        <Link to={'/recognize'} className='link'>
          <MenuItem onClick={() => this.handleClose()}>Recognize</MenuItem>
        </Link>
        <Link to={'/register'} className='link'>
          <MenuItem onClick={() => this.handleClose()}>Register</MenuItem>
        </Link>
        <Link to={'/users'} className='link'>
          <MenuItem onClick={() => this.handleClose()}>NewsFeed</MenuItem>
        </Link>
      </Drawer> */}
      {/* <Route exact="exact" path='/' render={(props) => <LandingPage {...props}/>}/> */}
      <Route exact="exact" path="/" component={LandingPage}/>
      <Route exact="exact" path='/users' component={NewsFeed}/>
      <Route exact="exact" path='/users/:id' component={SingleUser}/>
      <Route exact="exact" path='/users/user_id/posts/' component={Posts}/>
      <Route path='/recognize' render={(props) => <Recognize {...props}/>}/>
      <Route path='/register' render={(props) => <Register {...props}/>}/>
      {/* <Route exact="exact" path='/users' render={(props) => <NewsFeed {...props}/>}/> */}
      {/* <Route path='**' render={(props) => <LandingPage {...props}/>}/> */}


    </div>
  </ConnectedRouter>
</Provider>
)
}
}
export default Root;
