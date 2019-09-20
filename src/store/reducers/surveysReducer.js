import * as actionTypes from '../actions/actionTypes';

const initialState = {
  surveyFormData: null,
  saved: null
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
          saved: true
        }
        case actionTypes.SAVE_USER_SURVEY_FORM_FAIL:
        return {
          saved: false
        }
        default:
          return state;
    }
}

export default reducer;
