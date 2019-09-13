import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const renderRadioModal = props => {
let optionItems;
if(props.editingMode) {
  optionItems = (
    <>
     <TextField
        autoFocus
        margin="dense"
        id="SurveyRadioName"
        type="text"
        value={props.optionOne}
        onChange={(event, option) => props.changeSurveyRadioName(event, 'optionOne')}
        fullWidth
      />
      <TextField
          margin="dense"
          id="SurveyRadioName"
          type="text"
          value={props.optionTwo}
          onChange={(event, option) => props.changeSurveyRadioName(event, 'optionTwo')}
          fullWidth
      />
      <Button onClick={props.saveRadioNamesHandler}>Save</Button>
    </>
  )
} else {
  optionItems = (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value=''>
        <FormControlLabel value={props.optionOne} control={<Radio />} label={props.optionOne} />
        <FormControlLabel value={props.optionTwo} control={<Radio />} label={props.optionTwo} />
        <Button onClick={props.editRadioNamesHandler}>Edit Names</Button>
      </RadioGroup>
    </FormControl>
  )
}

     return (
      <Dialog open={props.surveyRadioDialog} onClose={props.removeDialog} aria-labelledby="form-dialog-title">
        <DialogContent>
          <h4>Input Radio Option Question</h4>
          <TextField
              autoFocus
              margin="dense"
              id="SurveyRadioQuestion"
              type="text"
              value={props.surveyRadioTempQuestion}
              onChange={props.changeSurveyRadioQuestion}
              fullWidth
            />
           {optionItems}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.saveSurveyRadioHandler}>Save</Button>
        </DialogActions>
      </Dialog>
)

}

export default renderRadioModal;
