import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SideBar from '../../containers/Navigation/SideBar';
import SurveyList from './SurveyList/SurveyList';
import CreateSurvey from '../CreateSurvey/CreateSurvey';
import Credits from './Credits/Credits';
import { connect } from  'react-redux';

import * as classes from './Dashboard.module.css';

const menuItems = {
  CreateNew: 'Create New Survey',
  MySurveys: 'My Surveys',
  Credits: 'Credits',
  BuyCredits: 'Buy Credits',
  HowItWorks: 'How it Works'
}

class Dashboard extends Component {

   state = {
     currentMenuItem: menuItems.MySurveys
   }

   renderMenuContent() {
     switch (this.state.currentMenuItem) {
       case menuItems.CreateNew:
         this.props.history.push('/surveys/new');
       break;
       case menuItems.MySurveys:
         return <SurveyList />
       break;
       case menuItems.Credits:
          return <Credits />
       break;
       case menuItems.BuyCredits:
          return <h2>Buy Credits Here</h2>
       break;
       case menuItems.HowItWorks:
          return <h2>How it works</h2>
       break;
       default:
         return <SurveyList />
     }
   }

   displayMenuItemHandler = (menuName) => {
      this.setState({currentMenuItem: menuName});
   }

   render () {
     return (
        <div>
          <Grid className={classes.Dashboard} container spacing={0}>
          <Grid item md={3} xs={0} sm={0}>
           <SideBar>
             <div className={classes.CreateSurveyBtn}>
               <Button onClick={(menuName) => this.displayMenuItemHandler(menuItems.CreateNew)}>Create New Survey</Button>
             </div>
             <div className={classes.SideBarMenuItems}>
                <ul>
                 <li onClick={(menuName) => this.displayMenuItemHandler(menuItems.MySurveys)}>MY SURVEYS (6)</li>
                 <li onClick={(menuName) => this.displayMenuItemHandler(menuItems.Credits)}>CREDITS (120)</li>
                 <li onClick={(menuName) => this.displayMenuItemHandler(menuItems.BuyCredits)}>BUY CREDITS</li>
                 <li onClick={(menuName) => this.displayMenuItemHandler(menuItems.HowItWorks)}>HOW IT WORKS</li>
                </ul>
             </div>
           </SideBar>
          </Grid>

          <Grid item md={9} xs={12} sm={12}>
                 <div className={classes.DashboardMain}>
                   <div className={classes.DashboardInnerBox}>
                     {this.renderMenuContent()}
                   </div>
                 </div>
             </Grid>
          </Grid>
       </div>
     )
   }
}
export default Dashboard;
