import axios from 'axios';
import * as actionTypes from './actionTypes';

export const saveUserSurveyFormSuccess = response => {
  return {
    type: actionTypes.SAVE_USER_SURVEY_FORM_SUCCESS,
    survey: response.data,
    status: response.status
  }
}

export const saveUserSurveyFormFail = error => {
  return {
    type: actionTypes.SAVE_USER_SURVEY_FORM_FAIL,
    error: error
  }
}

export const saveUserSurveyForm = (customForm) => {
  return dispatch => {
   axios.post('/api/store_survey_form', customForm)
   .then(response => {
     console.log(response);
     dispatch(saveUserSurveyFormSuccess(response))
   })
   .catch(err => {
     console.log(err);
     dispatch(saveUserSurveyFormFail(err));
   })
  }
}

export const saveSurveyEmailDetailsSuccess = response => {
   return {
     type: actionTypes.SAVE_SURVEY_EMAIL_DETAILS_SUCCESS,
     response: response.data
   }
}

export const saveSurveyEmailDetailsFail = err => {
  return {
    type: actionTypes.SAVE_SURVEY_EMAIL_DETAILS_FAIL,
    error: err
  }
}

export const saveSurveyEmailDetails = formdata => {
  return dispatch => {
   axios.post('/api/store_survey_email_details', formdata)
   .then(response => {
     dispatch(saveSurveyEmailDetailsSuccess(response))
   })
   .catch(err => {
     console.log(err);
     dispatch(saveSurveyEmailDetailsFail(err));
   })
  }
}


export const storeCustomSurveyForm = (userCustomSurveyForm) => {
  return {
    type: actionTypes.STORE_CUSTOM_SURVEY_FORM,
    customSurveyForm: userCustomSurveyForm
  }
}
