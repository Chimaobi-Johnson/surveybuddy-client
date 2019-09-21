import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import * as classes from './SideBar.module.css';

class SideBar extends Component {

  render () {

    return (
      <div className={classes.SideBar}>
          <h1>SURVEYBUDDY</h1>
          <div>
            <Icon style={{margin: '0 auto', width: '7rem', height: '7rem', display: 'block'}} fontSize='large'><AccountCircleIcon style={{margin: '0 auto', width: '7rem', height: '7rem', display: 'block'}}/></Icon>
          </div>
          <p>Chimaobi</p>
          <div>
            {this.props.children}
          </div>
       </div>
    )
  }
}

export default SideBar;
