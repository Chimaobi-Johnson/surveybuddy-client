import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import SideBar from '../../containers/Navigation/SideBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FormLabel from '@material-ui/core/FormLabel';

import axios from 'axios';

import * as classes from './SurveyFinalReview.module.css';


class SurveyFinalReview extends Component {

  state = {
    survey: null
  }

  componentDidMount() {
    axios.post('/api/survey_data', {surveyId: this.props.location.state.surveyId})
    .then(result => {
       const newSurvey = {...result.data.survey};
       this.setState({ survey: newSurvey });
    })
    .catch(err => {
      console.log(err);
    })
  }


    renderSurveyCheckbox() {
     let checkboxItems, checkboxDeleteBtn;
      return Object.values(this.state.survey.surveyCheckboxes).map(checkboxObj => {
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
        return Object.values(this.state.survey.surveyRadioOptions).map(radioObj => {
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

  renderSurveyInputs() {
    if(this.state.survey.surveyInputs) {
    return (
      <div id="inputArea" className={classes.InputArea}>
      {
        Object.keys(this.state.survey.surveyInputs).map(key => {
               return (<TextField
                  key={key + new Date().getMilliseconds()}
                  margin="dense"
                  id={key}
                  type="text"
                  label={key}
                  value={this.state.survey.surveyInputs[key]}
                  fullWidth
                />
              )
      })
      }
      </div>
    )
  }
  }

  renderFormContent() {
    if(this.state.survey) {
      return (
        <div className={classes.FormBox}>
         <div className={classes.InnerFormBox}>
          <h2>{this.state.survey.surveyTitleText ? this.state.survey.surveyTitleText : null}</h2>
          <p>{this.state.survey.surveyDescrText ? this.state.survey.surveyDescrText : null}</p>
          <div className={classes.SurveyImageBox}>
             {!this.state.survey.imageUrl ? null : <img alt="survey image" src={this.state.survey.imageUrl} />}
          </div>
            {this.renderSurveyInputs()}
          <div>
           {this.renderSurveyCheckbox()}
           {this.renderSurveyRadioOptions()}
          </div>
          <div className={classes.SurveyFooterText}>{this.state.survey.surveyFooterText ? this.state.survey.surveyFooterText : null}</div>
        </div>
        </div>
      )
    }
  }

  render () {

    console.log(this.state);

    let reviewData = <h3>Loading...</h3>;

    if(this.state.survey) {
      reviewData = (
        <Grid className={classes.Dashboard} container spacing={0}>
        <Grid item md={3}>
         <SideBar>
           <Button style={{color: '#fff', backgroundColor: '#ff9800', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} btntype='secondary'>Go Back</Button>
           <div style={{textAlign: 'center'}}>
               <p>SurveyName</p>
               <ArrowDownwardIcon />
               <h3>{this.state.survey.surveyName ? this.state.survey.surveyName : null}</h3>
           <div className={classes.EmailData}>
             <h3>EMAIL SUBJECT</h3>
             <div>{this.state.survey.emailSubject ? this.state.survey.emailSubject : null}</div>
             <h3>EMAIL BODY</h3>
             <div>{this.state.survey.emailBody ? this.state.survey.emailBody : null}</div>
             <h3>EMAIL RECIPIENTS</h3>
             <div>{this.state.survey.emailRecipients ? this.state.survey.emailRecipients.map(recipient => recipient) : null}</div>
             </div>
           </div>
         </SideBar>
           </Grid>

           <Grid item md={9} xs={12} sm={12}>
               <div className={classes.DashboardMain}>
               <a href="#" className={classes.NextBtn}>SEND OUT SURVEY</a>
               <a href="/surveys" className={classes.SendLaterBtn}>SEND LATER</a>
                 <div className={classes.DashboardInnerBox}>
                    {this.renderFormContent()}
                 </div>
               </div>
           </Grid>
        </Grid>
      )
    }

    return (
           <div>
             {reviewData}
           </div>
    )
  }
}

export default SurveyFinalReview;
