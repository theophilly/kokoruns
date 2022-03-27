import * as actionType from '../actionTypes/userDataActionTypes';

const intialState = {
    userData: {},
    error: '',
    message: '',
    loading: '',
    enterprise_ids: {
        companies: [],
        schools: [],
        associations: []
    },
    events: {}
};
export default function userDataReducer(state = intialState, action) {
    if (action.type === actionType.ON_FETCH_BEGIN) {
        return { ...state, loading: true };
    } else if (action.type === actionType.ON_USERDATA_FETCH_ERROR) {
        return { ...state, error: action.payload.error, loading: false };
    } else if (action.type === actionType.ON_USERDATA_FETCH_SUCCESS) {
        return { ...state, educations: action.payload.educations, loading: false };
    } else if (action.type === actionType.ADD_ENTERPRISE_IDS) {
        return {
            ...state,
            enterprise_ids: {
                companies: action.payload.companies ?? [],
                schools: action.payload.schools ?? [],
                associations: action.payload.associations ?? []
            },
            loading: false
        };
    } else if (action.type === actionType.ADD_ENTERPRISE_EVENTS) {
        return { ...state, events: action.payload, loading: false };
    } else if (action.type === actionType.SIGN_OUT) {
        return { ...intialState };
    } else {
        return state;
    }
}
