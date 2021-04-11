import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { HomePage } from './pages/HomePage';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { AppHeader } from './components/AppHeader/AppHeader';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
import './App.scss'
import React, { Component } from 'react'
import { SignUp } from './pages/SignUp/SignUp';
import { connect } from 'react-redux';


// change to func comp

class _App extends Component {

  PrivateRoute = (props) => {
    return props.user ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />
  }

  render() {
    return (
      < Router >
        <div className="App">
          <AppHeader />
          <Switch>
            <Route component={SignUp} path='/signup' />
            <this.PrivateRoute user={this.props.user} component={ContactEditPage} path='/contact/edit/:id?' />
            <this.PrivateRoute user={this.props.user} component={ContactDetailsPage} path='/contact/:id' />
            <this.PrivateRoute user={this.props.user} component={StatisticPage} path='/statistic' />
            <this.PrivateRoute user={this.props.user} component={ContactPage} path='/contact' />
            <this.PrivateRoute user={this.props.user} component={HomePage} path='/' />
          </Switch>
        </div>
      </Router >
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)

