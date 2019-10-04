import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AuthModal from '../../components/Modal/AuthModal/AuthModal';
import Icon from '@material-ui/core/Icon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { connect } from  'react-redux';

import * as classes from './TopNav.module.css';

class TopNav extends Component {

   state = {
      modalOpen: false,
      register: false
   }

   renderMobileAuthButton () {
     switch (this.props.auth) {
       case null:
        return (
          <div className={classes.MobileNav}>
             <input type="checkbox" className={classes.NavigationCheckbox} id="MobileNavToggle" />
             <label htmlFor="MobileNavToggle" className={classes.NavigationButton}>
                <span className={classes.NavigationIcon}>&nbsp;</span>
             </label>
             <div className={classes.NavigationBackground}>&nbsp;</div>
             <div className={classes.MobileNavigationBox}>
                <ul className={classes.MobileNavigationList}>
                  <li>
                    <Icon style={{margin: '0 auto', width: '5rem', height: '5rem', display: 'block'}} fontSize='large'>{this.props.auth.profilePhoto ? <div><img className={classes.Picture} src={this.props.auth.user.profilePhoto} alt='' /></div> : <AccountCircleIcon style={{margin: '0 auto', width: '5rem', height: '5rem', display: 'block'}}/>}</Icon>
                  </li>
                   <li><a href="#">Login/Register</a></li>
                   <li><a href="#">How It Works</a></li>
                   <li><a href="#">Contact</a></li>
                </ul>
             </div>
          </div>
        )
       case false:
         return (
           <div className={classes.MobileNav}>
              <input type="checkbox" className={classes.NavigationCheckbox} id="MobileNavToggle" />
              <label htmlFor="MobileNavToggle" className={classes.NavigationButton}>
                 <span className={classes.NavigationIcon}>&nbsp;</span>
              </label>
              <div className={classes.NavigationBackground}>&nbsp;</div>
              <div className={classes.MobileNavigationBox}>
                 <ul className={classes.MobileNavigationList}>
                  <li>
                    <Icon style={{margin: '0 auto', width: '5rem', height: '5rem', display: 'block'}} fontSize='large'>{this.props.auth.profilePhoto ? <div><img className={classes.Picture} src={this.props.auth.user.profilePhoto} alt='' /></div> : <AccountCircleIcon style={{margin: '0 auto', width: '5rem', height: '5rem', display: 'block'}}/>}</Icon>
                  </li>
                   <li><a href="#">Login/Register</a></li>
                   <li><a href="#">How It Works</a></li>
                   <li><a href="#">Contact</a></li>
                 </ul>
              </div>
           </div>
         )
       default:
         return (
           <div className={classes.MobileNav}>
              <input type="checkbox" className={classes.NavigationCheckbox} id="MobileNavToggle" />
              <label htmlFor="MobileNavToggle" className={classes.NavigationButton}>
                 <span className={classes.NavigationIcon}>&nbsp;</span>
              </label>
              <div className={classes.NavigationBackground}>&nbsp;</div>
              <div className={classes.MobileNavigationBox}>
                 <ul className={classes.MobileNavigationList}>
                   <li><a href="#">Dashboard</a></li>
                   <li><a href="#">Credits: 10</a></li>
                   <li><a href="#">Add Credits</a></li>
                   <li><a href="#">Surveys (1)</a></li>
                   <li><a href='/api/logout'>Log out</a></li>
                 </ul>
              </div>
           </div>
         )

       }
   }

   renderAuthButton() {
    console.log(this.props.auth);
     switch (this.props.auth) {
       case null:
        return <h3>Loading....</h3>
       case false:
         return <Button onClick={this.showAuthModal} btntype='primary'>LOGIN/REGISTER</Button>
       default:
        return (
          <div>
             <div className={classes.Profile}>
               <div><img  className={classes.Picture} src={this.props.auth.user.profilePhoto} alt='' /></div>
               <div className={classes.ProfileName}>Welcome {this.props.auth.user.facebookId ? this.props.auth.user.displayName : this.props.auth.user.firstName}</div>
               </div>
               <div className={classes.NavigationBox}>
                  <ul>
                    <li>Dashboard</li>
                    <li>Credits: 10</li>
                    <li>Add Credits</li>
                    <li>Surveys (1)</li>
                    <li><a href='/api/logout'>Log out</a></li>
                  </ul>
               </div>
               </div>
             )

     }
   }

   setRegisterModal = () => {
      this.setState({register: true});
   }

   setLoginModal = () => {
      this.setState({register: false});
   }

   showAuthModal = () => {
     this.setState({modalOpen: true});
   }

   handleClose = () => {
      this.setState({modalOpen: false});
    };


  render () {

    return (
      <nav>
        {this.renderMobileAuthButton()}
       <div className={classes.TopNav}>
        <Dialog className={classes.AuthDialogBox} open={this.state.modalOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <AuthModal />
        </Dialog>

         <div className={classes.TopMenu}>
        {this.renderAuthButton()}
         </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps)(TopNav);
