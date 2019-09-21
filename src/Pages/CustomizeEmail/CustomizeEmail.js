import React, { Component } from 'react';
import * as classes from './CustomizeEmail.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CustomizeEmail extends Component {

  render () {

    return (
      <div className={classes.Container}>
         <div className={classes.Triangle}><h2>SURVEYBUDDY</h2></div>
         <div className={classes.FormContainer}>
           <h2>Please Fill in all the inputs</h2>
               <TextField
                  id="emailSubject"
                  label="EMAIL SUBJECT"
                  placeholder="Name of the Email Subject "
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                 <TextField
                    id="emailBody"
                    label="EMAIL BODY"
                    placeholder="Message the Body of the Email will Contain"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                <TextField
                    id="emailRecipients"
                    label="EMAIL RECIPIENTS"
                    placeholder="List of Email Recipients Sparated With a Comma"
                    helperText="Please make sure the emails are separated with a comma"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
              <Button style={{float: 'right', backgroundColor: '#1b1a1a', color: '#fff'}}>Proceed</Button>


         </div>
      </div>
    )
  }
}

export default CustomizeEmail;
