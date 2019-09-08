import React, { Component } from 'react';
import TopNav from './containers/Navigation/TopNav';
import Landing from './components/Landing/Landing';
import AuthModal from './containers/Authentication/AuthModal';
import HomeBody from './containers/HomeBody/HomeBody';
import Dashboard from './Pages/Dashboard';
import CreateSurvey from './containers/Wizard/CreateSurveyWizard';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import * as actions from './store/actions';
import './App.css';

class App extends Component {

  componentDidMount () {
      this.props.authenticateUser()
  }

 render() {
   let routes = (
    <Switch>
       <Route path="/surveys/new" component={CreateSurvey} />
       <Route path="/surveys" component={Dashboard} />
       <Route path="/" exact component={Landing}/>
       <Redirect to="/" />
    </Switch>
   )
  return (
    <div className="App">
        <TopNav />
        {routes}
    </div>

     // pass authreducer from here starting from AuthModal down to TopNav and the rest of the page
     // two reducers authreducer and users reducers for a start

  );

}

}

const mapDispatchToProps = dispatch => {
  return {
    authenticateUser: () => dispatch(actions.fetchUser())
  }
}

export default connect(null, mapDispatchToProps)(App);
