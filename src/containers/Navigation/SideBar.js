import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { connect } from  'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import * as classes from './SideBar.module.css';

class SideBar extends Component {
  state = {
    drawerLeft: true
  }

  componentDidMount () {

  }

  closeDrawer() {
    document.getElementById('drawer-toggle').checked = false;
  }

  render () {
 console.log(this.props.auth);
 let profileInfo = <h3>Loading...</h3>;
 if(this.props.auth) {
   profileInfo = (
     <>
     <div>
        <Icon style={{margin: '0 auto', width: '7rem', height: '7rem', display: 'block'}} fontSize='large'>{this.props.auth.user.profilePhoto ? <div><img className={classes.Picture} src={this.props.auth.user.profilePhoto} alt='' /></div> : <AccountCircleIcon style={{margin: '0 auto', width: '7rem', height: '7rem', display: 'block'}}/>}</Icon>
     </div>
     <p style={{ textAlign: 'center' }}>{this.props.auth.user.facebookId ? this.props.auth.user.displayName : this.props.auth.user.firstName}</p>
     </>
   )
 }

    return (
      <>
      <div className={classes.DrawerBox}>
         <input type="checkbox" id="drawer-toggle" className={classes.DrawerToggle} name="drawer-toggle"/>
         <label htmlFor="drawer-toggle" id="drawer-toggle-label" style={{left: '0', position: 'fixed'}} className={classes.DrawerToggleLabel}>MENU</label>
         <div id="drawerBackdrop" onClick={this.closeDrawer} className={classes.DrawerBackdrop}></div>
         <div id="drawer" className={classes.Drawer}>
         <label htmlFor="drawer-toggle" id="drawer-toggle-label" style={{right: '0', padding: '2rem', position: 'absolute'}} className={classes.DrawerToggleLabel}>
           <span className={classes.CloseIcon}>&nbsp;</span>
         </label>
          <div className={classes.SideBarMobile}>
              <h3>SURVEYBUDDY</h3>
               {profileInfo}
              <div>
                {this.props.children}
              </div>
          </div>
         </div>
      </div>
      <div className={classes.SideBar}>
          <h1><a href="/">SURVEYBUDDY</a></h1>
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
