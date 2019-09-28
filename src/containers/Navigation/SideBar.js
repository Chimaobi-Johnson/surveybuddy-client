import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import { connect } from  'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import * as classes from './SideBar.module.css';

class SideBar extends Component {
  state = {
    drawerLeft: true
  }

  componentDidMount () {

  }

   toggleDrawer = (event, boolean) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ drawerLeft: [boolean] });
  };

   sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={(boolean) => this.toggleDrawer(false)}
      onKeyDown={(boolean) => this.toggleDrawer(false)}
    >
      <List>
        <h2>yes too</h2>
      </List>
      <Divider />
      <List>
        <h1>Yes</h1>
      </List>
    </div>
  );

  render () {
 console.log(this.props.auth);
 let profileInfo = <h3>Loading...</h3>;
 if(this.props.auth) {
   profileInfo = (
     <>
     <div>
        <Icon style={{margin: '0 auto', width: '7rem', height: '7rem', display: 'block'}} fontSize='large'>{this.props.auth.user.profilePhoto ? <div><img className={classes.Picture} src={this.props.auth.user.profilePhoto} alt='' /></div> : <AccountCircleIcon style={{margin: '0 auto', width: '7rem', height: '7rem', display: 'block'}}/>}</Icon>
     </div>
     <p>{this.props.auth.user.facebookId ? this.props.auth.user.displayName : this.props.auth.user.firstName}</p>
     </>
   )
 }

    return (
      <>
      <div className={classes.DrawerBox}>
        <Button onClick={this.toggleDrawer()}>Open Left</Button>
        <SwipeableDrawer
          open={this.state.drawerLeft}
        >
          {this.sideList('left')}
        </SwipeableDrawer>
      </div>
      <div className={classes.SideBar}>
          <h1>SURVEYBUDDY</h1>
           {profileInfo}
          <div>
            {this.props.children}
          </div>
       </div>
       </>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authReducer
  }
}

export default connect(mapStateToProps)(SideBar);
