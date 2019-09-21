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
   render () {
     return (
        <div>
          <Grid className={classes.Dashboard} container spacing={0}>
          <Grid item md={3} xs={12} sm={12}>
           <SideBar>
             <div className={classes.CreateSurveyBtn}>
               <Button>Create New Survey</Button>
             </div>
           </SideBar>
          </Grid>

          <Grid item md={9} xs={12} sm={12}>
                 <div className={classes.DashboardMain}>
                   <div className={classes.DashboardInnerBox}>

                   </div>
                 </div>
             </Grid>
          </Grid>
       </div>
     )
   }
}
export default Dashboard;
