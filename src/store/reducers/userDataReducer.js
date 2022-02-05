import * as actionType from '../actionTypes/userDataActionTypes';

const intialState = {
<<<<<<< HEAD
    userData: {},
=======
    resume: [],
    educations: [],
    portfolio: [],
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
    error: '',
    message: '',
    loading: ''
};
export default function userDataReducer(state = intialState, action) {
    if (action.type === actionType.ON_FETCH_BEGIN) {
        return { ...state, loading: true };
<<<<<<< HEAD
    } else if (action.type === actionType.ON_USERDATA_FETCH_ERROR) {
        return { ...state, error: action.payload.error, loading: false };
    } else if (action.type === actionType.ON_USERDATA_FETCH_SUCCESS) {
=======
    } else if (action.type === actionType.ON_EDUCATION_FETCH_ERROR) {
        return { ...state, error: action.payload.error, loading: false };
    } else if (action.type === actionType.ON_EDUCATION_FETCH_SUCCESS) {
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
        console.log(action.payload);
        return { ...state, educations: action.payload.educations, loading: false };
    } else {
        return state;
    }
}
