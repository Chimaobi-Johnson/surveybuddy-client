import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const renderInputModal = props => (
  <Dialog open={props.surveyInputDialog} onClose={props.removeDialog} aria-labelledby="form-dialog-title">
    <DialogContent>
      <h4>Input Label Name</h4>
      <TextField
        autoFocus
        margin="dense"
        id="SurveyInputLabelName"
        type="text"
        value={props.surveyInputLabelName}
        onChange={props.changeSurveyInputLabelName}
        />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.addInputHandler}>Save</Button>
    </DialogActions>
  </Dialog>
)

export default renderInputModal;
