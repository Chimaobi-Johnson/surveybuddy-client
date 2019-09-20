import axios from 'axios';
import * as actionTypes from './actionTypes';

export const saveUserSurveyFormSuccess = response => {
  return {
    type: actionTypes.SAVE_USER_SURVEY_FORM_SUCCESS,
    user: response.data
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
   axios.post('/api/store_survey_form')
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

export const storeCustomSurveyForm = (userCustomSurveyForm) => {
  return {
    type: actionTypes.STORE_CUSTOM_SURVEY_FORM,
    customSurveyForm: userCustomSurveyForm
  }
}
