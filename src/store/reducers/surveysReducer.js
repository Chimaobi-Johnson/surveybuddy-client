import * as actionTypes from '../actions/actionTypes';

const initialState = {
  surveyFormData: null,
  status: null,
  data: null,
  emailDetails: null,
  emailDetailsFail: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_CUSTOM_SURVEY_FORM:
        return {
          ...state,
           surveyFormData: {
             ...action.customSurveyForm
           }
        }
        case actionTypes.SAVE_USER_SURVEY_FORM_SUCCESS:
        return {
          status: action.status,
          data: action.survey
        }
        case actionTypes.SAVE_USER_SURVEY_FORM_FAIL:
        return {
          status: 500
        }
        case actionTypes.SAVE_SURVEY_EMAIL_DETAILS_SUCCESS:
        return {
          emailDetails: action.response
        }
        case actionTypes.SAVE_SURVEY_EMAIL_DETAILS_FAIL:
        return {
          emailDetailsFail: true
        }
        default:
          return state;
    }
}

export default reducer;
