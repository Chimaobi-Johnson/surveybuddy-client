import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import * as classes from './RenderImageModal.module.css';

const renderImageModal = props => (
  <Dialog open={props.surveyImageDialog} onClose={props.removeDialog} aria-labelledby="form-dialog-title">
    <DialogContent>
      <h4>Add a Logo/Image</h4>
      <Input
        autoFocus
        margin="dense"
        id="SurveyImage"
        type="file"
        value={props.surveyImagePath}
        onChange={props.changeSurveyImage}
        fullWidth
        />
        <div className={classes.SurveyImageBox}>
           {!props.imagePreviewUrl ? null : <img style={{margin: '0'}} src={props.imagePreviewUrl} />}
        </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.removeDialog}>Save</Button>
    </DialogActions>
  </Dialog>
)

export default renderImageModal;
