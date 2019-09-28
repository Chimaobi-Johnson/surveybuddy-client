import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import GoogleButton from '../../components/Button/GoogleButton';
import FacebookButton from '../../components/Button/FacebookButton';
import AuthModal from '../../components/Modal/AuthModal/AuthModal';
import { connect } from  'react-redux';

import * as classes from './TopNav.module.css';

const formClasses = {
  font: '4rem',
  backgroundColor: 'red'
}

class TopNav extends Component {

   state = {
      modalOpen: false,
      register: false
   }

   renderAuthButton() {
    console.log(this.props.auth);
    console.log('topnav');
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
  let renderAuthModal;

    return (
      <nav className={classes.TopNav}>

      <Dialog className={classes.AuthDialogBox} open={this.state.modalOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <AuthModal />
      </Dialog>


       <div className={classes.TopMenuBtn}></div>
       <div className={classes.TopMenu}>
        {this.renderAuthButton()}
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
