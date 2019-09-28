import * as actionTypes from '../actions/actionTypes';
import isEmpty from 'lodash/isEmpty';

const reducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SUCCESS:
        return !isEmpty(action.user) ? action.user : false
        case actionTypes.FETCH_USER_FAIL:
        return false
        default:
        return state;
    }
}

export default reducer;
