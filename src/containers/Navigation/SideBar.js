import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import * as classes from './SideBar.module.css';

class SideBar extends Component {

  render () {

    return (
      <Grid item md={3}>
          <div className={classes.SideBar}>
             <h1>SURVEYBUDDY</h1>
             <div style={{width: '7rem', height: '7rem', backgroundColor: '#ccc', borderRadius: '100%', margin: '0 auto'}}></div>
             <p>Chimaobi</p>
             <Button style={{color: '#fff', backgroundColor: '#000', }} btntype='secondary'>Create New Survey</Button>
             <h2>MY SURVEYS</h2>
             <h2>BUY CREDITS</h2>
             <h2>HOW IT WORKS</h2>
             <p className={classes.Copyright}>CopyrightcMarvisConcepts</p>
          </div>
      </Grid>
    )
  }
}

export default SideBar;
