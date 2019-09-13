import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const renderFooterModal = props => (
  <Dialog open={props.surveyFooterDialog} onClose={props.removeDialog} aria-labelledby="form-dialog-title">
    <DialogContent>
      <h4>Add Footer Text</h4>
      <TextField
        autoFocus
        margin="dense"
        id="SurveyFooter"
        type="text"
        value={props.surveyFooterText}
        onChange={props.changeSurveyFooterText}
        />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.removeDialog}>Save</Button>
    </DialogActions>
  </Dialog>
)

export default renderFooterModal;
