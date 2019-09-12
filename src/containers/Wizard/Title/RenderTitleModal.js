import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const renderTitleModal = props => (
  <Dialog open={props.surveyTitleDialog} onClose={props.removeDialog} aria-labelledby="form-dialog-title">
    <DialogContent>
      <h4>Add a Title</h4>
      <TextField
        autoFocus
        margin="dense"
        id="SurveyTitle"
        type="text"
        value={props.surveyTitleText}
        onChange={props.changeSurveyTitle}
        />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.removeDialog}>Save</Button>
    </DialogActions>
  </Dialog>
)

export default renderTitleModal;
