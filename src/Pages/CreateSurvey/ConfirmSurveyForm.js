import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';

import * as actions from '../../store/actions';

import * as classes from './ConfirmSurveyForm.module.css';

class ConfirmSurveyForm extends Component {

 componentDidMount() {

 }

 goBack = () => {
   this.props.history.push('/surveys/new');
 }

 saveSurveyFormHandler = () => {
   if(this.props.customSurvey) {
     const customForm = this.props.customSurvey;
     this.props.saveUserSurveyForm(customForm);
   }
 }

  renderSurveyCheckbox() {
   let checkboxItems, checkboxDeleteBtn;
    return Object.values(this.props.customSurvey.surveyCheckboxes).map(checkboxObj => {
      if(checkboxObj.surveyCheckboxNames) {
        // To render checkbox items
        checkboxItems = Object.keys(checkboxObj.surveyCheckboxNames)
        .map(checkbox => {
          return <FormControlLabel
           control={<Checkbox checked={false} value="checkedB" color="primary" />}
           label={checkbox}/>
        });
      }
      return (
        <>
          <h4>{checkboxObj.surveyCheckboxQuestion}</h4>
          {checkboxItems}
        </>
      )
    })
  }

  renderSurveyRadioOptions() {
      return Object.values(this.props.customSurvey.surveyRadioOptions).map(radioObj => {
        if(radioObj.surveyRadioOptionNames.length !== 0) {
          return (
            <>
            <h3>{radioObj.surveyRadioQuestion}</h3>
            <FormLabel component="legend"></FormLabel>
            <RadioGroup style={{display: 'block'}} row aria-label="" name="" value=''>
              <FormControlLabel value={radioObj.surveyRadioOptionNames[0]} control={<Radio />} label={radioObj.surveyRadioOptionNames[0]} />
              <FormControlLabel value={radioObj.surveyRadioOptionNames[1]} control={<Radio />} label={radioObj.surveyRadioOptionNames[1]} />
            </RadioGroup>
            </>)
        }
      });
    }

  renderFormContent() {
    if(this.props.customSurvey) {
      return (
        <div className={classes.FormBox}>
          <h3 className={classes.SurveyName}>{this.props.customSurvey.surveyName}</h3>
         <div className={classes.InnerFormBox}>
          <h2>{this.props.customSurvey.surveyTitleText ? this.props.customSurvey.surveyTitleText : null}</h2>
          <p>{this.props.customSurvey.surveyDescrText ? this.props.customSurvey.surveyDescrText : null}</p>
          <div className={classes.SurveyImageBox}>
             {!this.props.customSurvey.imagePreviewUrl ? null : <img src={this.props.customSurvey.imagePreviewUrl} />}
          </div>
          <div id="inputArea" className={classes.InputArea}>
          {
            Object.keys(this.props.customSurvey.surveyInputs).map(key => {
                   return (<TextField
                      key={key + new Date().getMilliseconds()}
                      margin="dense"
                      id={key}
                      type="text"
                      label={key}
                      value={this.props.customSurvey.surveyInputs[key]}
                      fullWidth
                    />
                  )
          })
          }
          </div>
          <div>
           {this.renderSurveyCheckbox()}
           {this.renderSurveyRadioOptions()}
          </div>
          <div className={classes.SurveyFooterText}>{this.props.customSurvey.surveyFooterText ? this.props.customSurvey.surveyFooterText : null}</div>
        </div>
        </div>
      )
    }
    else {
      return <div className={classes.FormBox}><div className={classes.InnerFormBox}><h1>Please go back and fill in form data</h1></div></div>
    }
  }

  render () {
    let saveStatus;
    if(this.props.customSurvey) {
      if(this.props.customSurvey.saved === true) {
         saveStatus = (
          <Dialog open={this.props.customSurvey.saved} aria-labelledby="form-dialog-title">
            <DialogContent>
              <h1> Your Form Has been Saved Successfully </h1>
            </DialogContent>
            <DialogActions>
              <Button>Continue</Button>
            </DialogActions>
          </Dialog>
        )
      } else {
         saveStatus = (
          <Dialog open={this.props.customSurvey.saved === false ? true : false} aria-labelledby="form-dialog-title">
            <DialogContent>
              <h1> Error Saving Form. Check Connection Settings... </h1>
            </DialogContent>
            <DialogActions>
              <Button>Retry</Button>
            </DialogActions>
          </Dialog>
        )
      }

    }

    return (
      <div className={classes.OuterBox}>
       {saveStatus}
       <a onClick={this.goBack}href="#" className={classes.BtnBack}>Back</a>
       <a onClick={this.saveSurveyFormHandler}href="#" className={classes.BtnSave}>Save Form</a>
       {this.renderFormContent()}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveUserSurveyForm: (customForm) => dispatch(actions.saveUserSurveyForm(customForm)),
  }
}

const mapStateToProps = state => {
  return {
    customSurvey: state.surveysReducer.surveyFormData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSurveyForm);
