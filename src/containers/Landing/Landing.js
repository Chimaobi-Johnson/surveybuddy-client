import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TopNav from '../Navigation/TopNav';
import Dialog from '@material-ui/core/Dialog';
import AuthModal from '../../components/Modal/AuthModal/AuthModal';

import * as classes from './Landing.module.css';

class Landing extends Component {
  state = { modalOpen: false }

  handleClose = () => {
    this.setState({ modalOpen: false });
  }

  openAuthModal = () => {
    this.setState({ modalOpen: true });
  }
  render() {
     return (
       <div className={classes.LandingMain}>
       <Dialog className={classes.AuthDialogBox} open={this.state.modalOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
         <AuthModal />
       </Dialog>
            <h3 className={classes.TitleBlock}>SURVEYBUDDY</h3>
            <div className={classes.LandingCurve}>
            <h3 className={classes.TitleBlockMobile}>SURVEYBUDDY</h3>
            <div className={classes.ItemBlock}></div>
            <div className={classes.MobileGetStartedBtn}>
             <Button onClick={this.openAuthModal}>Get Started</Button>
            </div>
            <div className={classes.LandingCircle2}>

               <div className={classes.LandingTextBox}>
                 <h2>A simple & powerful online survey tool</h2>
                 <p>
                    Sign up now for free unlimited surveys, questions & responses.
                 </p>
                 <a href="#" className={classes.HomeButton}>Get Started</a>
              </div>

            </div>
                 <p className={classes.Item1}>Create custom surveys and send to your users</p>
                 <p className={classes.Item2}>Sign up and get free credits</p>
                 <p className={classes.Item3}>Get Feedback and analyze your data</p>
                {/*  <h3>Write Customized Surveys and Send Out to Your Users</h3>
                  <div className={classes.ShortLine}></div> */}
                  {/* <h2>Get Feedback as Soon they Respond</h2>
                  <h2>Review and Analyze Data</h2> */}
            </div>
            <div className={classes.ImageBox}>
               <img className={classes.CartoonImage} alt='vector' src={require('../../images/cartoons/cartoonman_standing.jpg')}/>
            </div>

      </div>
     )
 }

}

export default Landing;
