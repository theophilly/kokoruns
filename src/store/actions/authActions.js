import * as actionType from '../actionTypes/authActionsTypes';
import api from '../../helpers/api.js';

export const login = (user) => {
    return async (dispatch) => {
        console.log(user);
        dispatch({ type: actionType.LOGIN_BEGIN });

        await api
            .signIn({ email: user.loginEmail, password: user.loginPassword })
            .then(async (res) => {
                console.log(res.data);
                await dispatch({
                    type: actionType.ON_LOGIN_SUCCESS,
                    payload: {
                        ...res.data
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionType.ON_LOGIN_ERROR,
                    payload: {
                        error: error.response.data.message
                    }
                });
                // console.log(error.response.data.message);
            });
    };
};

export const signup = (user) => {
    return async (dispatch) => {
        dispatch({ type: actionType.LOGIN_BEGIN });

        await api
            .signUp({ ...user })
            .then((res) => {
                dispatch({
                    type: actionType.ON_SIGNUP_SUCCESS,
                    payload: {
                        ...res.data
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionType.ON_SIGNUP_ERROR,
                    payload: {
                        error: error.response.data.error.email[0]
                    }
                });
                // console.log(error.response.data.error.email[0]);
            });
    };
};
export const updateUser = (user) => {
    return async (dispatch) => {
        await api
            .update({ ...user })
            .then((res) => {
                dispatch({
                    type: actionType.USER_UPDATE,
                    payload: {
                        ...res.data
                    }
                });
            })
            .catch((error) => {
                if (error.response?.status === 401) {
                    dispatch({
                        type: 'SIGN_OUT',
                        payload: {
                            error: 'session expired'
                        }
                    });
                } else {
                    dispatch({
                        type: actionType.ON_UPDATE_ERROR,
                        payload: {
                            error: error.response.data.error
                        }
                    });
                }
            });
    };
};

export const fetchUserDetails = () => {
    return async (dispatch) => {
        //fetch user details
        await api
            .fetchUserDetails()
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: actionType.ADD_USER_DETAILS,
                    payload: {
                        ...res.data
                    }
                });
            })
            .catch((error) => {
                dispatch({
                    type: actionType.ON_LOGIN_ERROR,
                    payload: {
                        error: error.response.data.error
                    }
                });
                console.log(error.response.data.error);
            });
    };
};

export const updateUserProfile = (profile) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .setUpProfile(profile)
            .then(async (res) => {
                // console.log(res.data);
                //fetch user details
                await api
                    .fetchUserDetails()
                    .then((res) => {
                        console.log(res.data);
                        dispatch({
                            type: actionType.ADD_USER_DETAILS,
                            payload: {
                                ...res.data
                            }
                        });
                    })
                    .catch((error) => {
                        dispatch({
                            type: actionType.ON_LOGIN_ERROR,
                            payload: {
                                error: error.response.data.error
                            }
                        });
                        console.log(error.response.data.error);
                    });

                //turn active to 1
                dispatch({
                    type: actionType.USER_UPDATE,
                    payload: {
                        ...res.data
                    }
                });
            })
            .catch((error) => {
                // dispatch({
                //     type: actionType.ON_EDUCATION_FETCH_ERROR,
                //     payload: {
                //         error: error.response.data.error
                //     }
                // });
                console.log(error.response);
            });
    };
};

export const updatePassword = (user) => {
    return async (dispatch) => {
        await api
            .updatepassword({ ...user })
            .then((res) => {
                dispatch({
                    type: actionType.USER_UPDATE,
                    payload: {
                        ...res.data
                    }
                });
            })
            .catch((error) => {
                if (error.response?.status === 401) {
                    dispatch({
                        type: 'SIGN_OUT',
                        payload: {
                            error: 'session expired'
                        }
                    });
                } else {
                    dispatch({
                        type: actionType.ON_UPDATE_ERROR,
                        payload: {
                            error: error.response.data.error
                        }
                    });
                }
            });
    };
};
