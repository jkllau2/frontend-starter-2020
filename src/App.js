import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './client/containers/Home/Home';
import Movies from './client/containers/Movies/Movies';
import './App.css';
import { bindActionCreators } from 'redux';
import { userActions } from './client/redux/actions';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/movies" component={Movies} />
  </Switch>
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(App))
