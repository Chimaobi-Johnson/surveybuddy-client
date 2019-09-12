import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const surveyName = props => {
   let surveyName;
   if(props.surveyNameEditingMode) {
    surveyName = (
     <>
      <TextField
        autoFocus
        margin="dense"
        id="SurveyName"
        type="text"
        value={props.surveyNameText}
        onChange={props.surveyNameChange}
      />
      <Button onClick={props.saveSurveyName}>Save</Button>
      </>
    )
   } else {
       surveyName = (
        <>
       <h3>{props.surveyNameText}</h3>
       <Button onClick={props.editSurveyName}>Edit</Button>
       </>
      )
   }


   return (
     <>
    {surveyName}
    </>
   )

}


export default surveyName;
