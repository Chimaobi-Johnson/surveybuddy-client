import React, { Component } from 'react';
import * as classes from './CustomizeEmail.module.css';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import SideBar from '../../containers/Navigation/SideBar';
import * as actions from '../../store/actions';

class CustomizeEmail extends Component {

   state = {
     emailSubject: '',
     emailBody: '',
     emailRecipients: '',
     surveyId: null,
     loading: false
   }

   componentDidMount () {
     this.setState({ surveyId: this.props.location.state.surveyId });
   }

    textFieldChangeHandler = (event, textfield) => {
      this.setState({ [textfield]: event.target.value });
    }

    submitSurveyEmailHandler = event => {

       event.preventDefault();
       let formdata = {
         emailSubject: this.state.emailSubject,
         emailBody: this.state.emailBody,
         emailRecipients: this.state.emailRecipients,
         surveyId: this.state.surveyId
       };
       this.props.onSaveSurveyEmail(formdata);
       this.setState({ loading: true });
    }

  render () {

   if(this.props.emailDetails) {
     this.props.history.push('/surveys/review_final', { surveyId: this.state.surveyId });
   }

    return (
      <div className={classes.Container}>
         <SideBar />
         <div className={classes.FormContainer}>
           <h2>Please Fill in all the inputs</h2>
               <TextField
                  id="emailSubject"
                  label="EMAIL SUBJECT"
                  placeholder="Name of the Email Subject "
                  margin="normal"
                  variant="outlined"
                  onChange={(event, textfield) => this.textFieldChangeHandler(event, 'emailSubject')}
                  fullWidth
                />
                 <TextField
                    id="emailBody"
                    label="EMAIL BODY"
                    placeholder="Message the Body of the Email will Contain"
                    onChange={(event, textfield) => this.textFieldChangeHandler(event, 'emailBody')}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                <TextField
                    id="emailRecipients"
                    label="EMAIL RECIPIENTS"
                    placeholder="List of Email Recipients Sparated With a Comma"
                    helperText="Please make sure the emails are separated with a comma"
                    onChange={(event, textfield) => this.textFieldChangeHandler(event, 'emailRecipients')}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
              <Button onClick={this.submitSurveyEmailHandler} style={{float: 'right', backgroundColor: '#1b1a1a', color: '#fff'}}>{this.state.loading ? 'loading...' : 'Proceed' }</Button>


         </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    emailDetails: state.surveysReducer.emailDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveSurveyEmail: (formdata) => dispatch(actions.saveSurveyEmailDetails(formdata))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeEmail);
