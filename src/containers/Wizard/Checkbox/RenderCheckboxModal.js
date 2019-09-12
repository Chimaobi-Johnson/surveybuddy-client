import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from  'react-redux';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';


const renderCheckboxModal = props => {

  const renderCheckBoxesOnModal = () => {
    let checkboxOne, checkboxTwo, checkboxThree, checkboxFour, checkboxFive;
    if(props.surveyCheckboxInitValues) {
      checkboxOne = (<>
        <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={props.checkboxOneInitValue} fullWidth />
        <Button onClick={(checkbox) => props.saveCheckboxNameHandler('checkboxOne')}>Save Names</Button></>);
      checkboxTwo = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={props.checkboxOneInitValue} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={props.checkboxTwoInitValue} fullWidth />
          <Button onClick={(checkbox) => props.saveCheckboxNameHandler('checkboxTwo')}>Save Names</Button></>);
      checkboxThree = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={props.checkboxOneInitValue} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={props.checkboxTwoInitValue} fullWidth />
          <TextField type="text" label="Checkbox Three" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxThree')} value={props.checkboxThreeInitValue} fullWidth />
          <Button onClick={(checkbox) => props.saveCheckboxNameHandler('checkboxThree')}>Save Names</Button></>);
      checkboxFour = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={props.checkboxOneInitValue} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={props.checkboxTwoInitValue} fullWidth />
          <TextField type="text" label="Checkbox Three" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxThree')} value={props.checkboxThreeInitValue} fullWidth />
          <TextField type="text" label="Checkbox Four" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxFour')} value={props.checkboxFourInitValue} fullWidth />
          <Button onClick={(checkbox) => props.saveCheckboxNameHandler('checkboxFour')}>Save Names</Button></>);
      checkboxFive = (<>
          <TextField type="text" label="Checkbox One" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxOne')} value={props.checkboxOneInitValue} fullWidth />
          <TextField type="text" label="Checkbox Two" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxTwo')} value={props.checkboxTwoInitValue} fullWidth />
          <TextField type="text" label="Checkbox Three" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxThree')} value={props.checkboxThreeInitValue} fullWidth />
          <TextField type="text" label="Checkbox Four" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxFour')} value={props.checkboxFourInitValue} fullWidth />
          <TextField type="text" label="Checkbox Five" onChange={(event, checkbox) => props.surveyCheckboxNameChangeHandler(event, 'checkboxFive')} value={props.checkboxFiveInitValue} fullWidth />
          <Button onClick={(checkbox) => props.saveCheckboxNameHandler('checkboxFive')}>Save Names</Button></>);
    } else {
      checkboxOne = (<>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxOneInitValue === '' ? 'checkbox 1' : props.checkboxOneInitValue}/>
        <Button onClick={(checkbox) => props.editCheckboxNameHandler('checkboxOne')}>Edit Names</Button></>);
      checkboxTwo = (<>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxOneInitValue === '' ? 'checkbox 1' : props.checkboxOneInitValue}/>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxTwoInitValue === '' ? 'checkbox 2' : props.checkboxTwoInitValue}/>
        <Button onClick={(checkbox) => props.editCheckboxNameHandler('checkboxTwo')}>Edit Names</Button></>);
      checkboxThree = (<>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxOneInitValue === '' ? 'checkbox 1' : props.checkboxOneInitValue}/>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxTwoInitValue === '' ? 'checkbox 2' : props.checkboxTwoInitValue}/>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxThreeInitValue === '' ? 'checkbox 3' : props.checkboxThreeInitValue}/>
        <Button onClick={(checkbox) => props.editCheckboxNameHandler('checkboxThree')}>Edit Names</Button></>);
      checkboxFour = (<>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxOneInitValue === '' ? 'checkbox 1' : props.checkboxOneInitValue}/>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxTwoInitValue === '' ? 'checkbox 2' : props.checkboxTwoInitValue}/>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxThreeInitValue === '' ? 'checkbox 3' : props.checkboxThreeInitValue}/>
        <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxFourInitValue === '' ? 'checkbox 4' : props.checkboxFourInitValue}/>
        <Button onClick={(checkbox) => props.editCheckboxNameHandler('checkboxFour')}>Edit Names</Button></>);
      checkboxFive = (<>
         <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxOneInitValue === '' ? 'checkbox 1' : props.checkboxOneInitValue}/>
         <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxTwoInitValue === '' ? 'checkbox 2' : props.checkboxTwoInitValue}/>
         <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxThreeInitValue === '' ? 'checkbox 3' : props.checkboxThreeInitValue}/>
         <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxFourInitValue === '' ? 'checkbox 4' : props.checkboxFourInitValue}/>
         <FormControlLabel control={<Checkbox checked={false} value="checkedB" color="primary" />} label={props.checkboxFiveInitValue === '' ? 'checkbox 5' : props.checkboxFiveInitValue}/>
         <Button onClick={(checkbox) => props.editCheckboxNameHandler('checkboxFive')}>Edit Names</Button></>);
    }
    switch (props.surveyCheckboxNumber) {

     case 1:
        return checkboxOne;
     case 2:
        return checkboxTwo;
     case 3:
        return checkboxThree;
     case 4:
        return checkboxFour;
     case 5:
        return checkboxFive;
      default:
         return null;
    }
  }


  return (
    <Dialog open={props.surveyCheckboxDialog} onClose={props.removeDialog} aria-labelledby="form-dialog-title">
      <DialogContent>
        <h4>Input Checkbox Question (If there is any)</h4>
        <TextField
            autoFocus
            margin="dense"
            id="SurveyCheckboxQuestion"
            type="text"
            value={props.surveyCheckboxTempQuestion}
            onChange={props.changeSurveyCheckboxQuestion}
            fullWidth
          />
          <h4>Input Number of Checkboxes</h4>
            <Select
            style={{marginRight: '1.5rem'}}
              value={props.surveyCheckboxNumber}
              onChange={props.changeCheckboxNumber}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            {renderCheckBoxesOnModal()}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.saveSurveyCheckboxHandler}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default renderCheckboxModal;
