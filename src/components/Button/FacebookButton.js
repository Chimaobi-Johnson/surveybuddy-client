import React from 'react';
import * as classes from './FacebookButton.module.css';

const facebookButton = props => (
  <div>
    <a href='/auth/facebook' className={classes.FacebookBtn}>
    <img className={classes.FacebookIcon} alt='vector' src={require('../../images/png/facebook-icon2.png')}/>
    Continue with Facebook</a>
  </div>
)

export default facebookButton;
