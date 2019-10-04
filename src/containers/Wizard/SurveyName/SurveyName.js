import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import * as classes from './SurveyName.module.css';

const surveyName = props => {
   let surveyName;
   if(props.surveyNameEditingMode) {
    surveyName = (
     <div className={classes.SurveyName}>
      <TextField
        autoFocus
        margin="dense"
        id="SurveyName"
        type="text"
        value={props.surveyNameText}
        onChange={props.surveyNameChange}
      />
      <Button style={{color: '#ff9800'}} onClick={props.saveSurveyName}>Save</Button>
      </div>
    )
   } else {
       surveyName = (
        <>
       <h3>{props.surveyNameText}</h3>
       <Button style={{color: '#ff9800'}} onClick={props.editSurveyName}>Edit</Button>
       </>
      )
   }


   return (
     <div style={{color: '#fff'}}>
    {surveyName}
    </div>
   )

}


export default surveyName;
