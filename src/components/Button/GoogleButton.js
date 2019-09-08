import React from 'react';
import * as classes from './GoogleButton.module.css';

const googleButton = props => (
  <div>
    <a href='/auth/google' className={classes.GoogleBtn}>
    <img className={classes.GoogleIcon} alt='vector' src={require('../../images/png/google-icon.png')}/>
    Sign in with Google</a>
  </div>
)

export default googleButton;
