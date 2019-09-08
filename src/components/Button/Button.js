import React from 'react';
import * as classes from './Button.module.css';


const button = props => {
  let button;
  switch(props.btntype) {
    case 'primary':
    return button = <div className={classes.btnPrimary} {...props}>{props.children}</div>
    case 'secondary':
    return button = <div className={classes.btnSecondary}>{props.children}</div>
    case 'tertiary':
    return button = <div className={classes.btnTertiary}>{props.children}</div>
    default:
    return button = <div className={classes.btnPrimary}>{props.children}</div>
  }
  return (
    {button}
  )
}


export default button;
