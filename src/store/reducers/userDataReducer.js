import * as actionType from '../actionTypes/userDataActionTypes';

const intialState = {
    userData: {},
    error: '',
    message: '',
    loading: ''
};
export default function userDataReducer(state = intialState, action) {
    if (action.type === actionType.ON_FETCH_BEGIN) {
        return { ...state, loading: true };
    } else if (action.type === actionType.ON_USERDATA_FETCH_ERROR) {
        return { ...state, error: action.payload.error, loading: false };
    } else if (action.type === actionType.ON_USERDATA_FETCH_SUCCESS) {
        console.log(action.payload);
        return { ...state, educations: action.payload.educations, loading: false };
    } else {
        return state;
    }
}
