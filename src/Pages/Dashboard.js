import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SideBar from '../containers/Navigation/SideBar';
import SurveyList from './SurveyList/SurveyList';
import CreateSurvey from './CreateSurvey/CreateSurvey';
import { connect } from  'react-redux';

import * as classes from './Dashboard.module.css';

const menuItems = {
  CreateNew: 'Create New Survey',
  MySurveys: 'My Surveys',
  BuyCredits: 'Buy Credits',
  HowItWorks: 'How it Works'
}

class Dashboard extends Component {

  state = {
    page: menuItems.MySurveys
  }

  componentDidMount() {
    // if(!this.props.auth) {
    //   alert('error, you are not allowed to access this page');
    // }
  }

  initiateNewSurvey = () => {
    this.setState({page: menuItems.CreateNew});
  }

  cancelNewSurvey = () => {
    this.setState({page: menuItems.MySurveys});
  }

  renderSideBar() {
    if(this.state.page === menuItems.CreateNew) {
      return (<div className={classes.SideBar}>
         <h1>SURVEYBUDDY</h1>
         <div style={{width: '7rem', height: '7rem', backgroundColor: '#ccc', borderRadius: '100%', margin: '0 auto'}}></div>
         <p>Chimaobi</p>
         <h3>Wizard</h3>
         <Button onClick={this.cancelNewSurvey} style={{color: '#fff', backgroundColor: '#000', }} btntype='secondary'>Go Back</Button>
         <h2>SurveyName</h2>
         <h2></h2>
         <h2>HOW IT WORKS</h2>
         <p className={classes.Copyright}>CopyrightcMarvisConcepts</p>
        </div>)
    }
    else {
      return (<div className={classes.SideBar}>
         <h1>SURVEYBUDDY</h1>
         <div style={{width: '7rem', height: '7rem', backgroundColor: '#ccc', borderRadius: '100%', margin: '0 auto'}}></div>
         <p>Chimaobi</p>
         <Button onClick={this.initiateNewSurvey} style={{color: '#fff', backgroundColor: '#000', }} btntype='secondary'>Create New Survey</Button>
         <h2>MY SURVEYS</h2>
         <h2>BUY CREDITS</h2>
         <h2>HOW IT WORKS</h2>
         <p className={classes.Copyright}>CopyrightcMarvisConcepts</p>
      </div>)
    }
  }

  renderDashboardContent() {
    switch(this.state.page) {
      case menuItems.CreateNew:
       return <CreateSurvey />
      default:
       return <SurveyList />
    }
  }

  render () {

    return (
      <div>
        <Grid className={classes.Dashboard} container spacing={0}>

         <Grid item md={3}>
            {this.renderSideBar()}
            </Grid>

            <Grid item md={9}>
                <div className={classes.DashboardMain}>
                  <div className={classes.DashboardInnerBox}>
                    {this.renderDashboardContent()}
                  </div>
                </div>
            </Grid>
         </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps)(Dashboard);
