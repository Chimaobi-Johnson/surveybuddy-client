import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const renderDescriptionModal = props => (
  <Dialog open={props.surveyDescrDialog} onClose={props.removeDialog} aria-labelledby="form-dialog-title">
    <DialogContent>
      <h4>Add a Description</h4>
      <TextField
        autoFocus
        margin="dense"
        id="SurveyName"
        type="text"
        value={props.surveyDescrText}
        onChange={props.changeSurveyDescr}
        fullWidth
        />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.removeDialog}>Save</Button>
    </DialogActions>
  </Dialog>
)

export default renderDescriptionModal;
