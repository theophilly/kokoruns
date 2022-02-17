import * as actionType from '../actionTypes/userDataActionTypes';
import api from '../../helpers/api.js';
import { fetchUserDetails } from './authActions';

// export const fecthEducations = (user) => {
//     return async (dispatch) => {
//         dispatch({ type: actionType.ON_FETCH_BEGIN });

//         await api
//             .fetchEducations()
//             .then((res) => {
//                 console.log(res.data);
//                 dispatch({
//                     type: actionType.ON_EDUCATION_FETCH_SUCCESS,
//                     payload: {
//                         ...res.data
//                     }
//                 });
//             })
//             .catch((error) => {
//                 // dispatch({
//                 //     type: actionType.ON_EDUCATION_FETCH_ERROR,
//                 //     payload: {
//                 //         error: error.response.data.error
//                 //     }
//                 // });
//                 console.log(error.response);
//             });
//     };
// };

// education
export const addEducation = (education) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .addEducation(education)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const updateEducation = (id, education) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .updateEducation(id, education)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const deleteEducation = (education) => {
    console.log(education);
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .deleteEducation(education)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

// certification
export const addCertification = (certification) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .addCertification(certification)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const updateCertification = (id, certification) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .updateCertification(id, certification)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const deleteCertification = (certification) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .deleteCertification(certification)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

//add resume
export const addResume = (resume) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .addResume(resume)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const updateResume = (id, resume) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .updateResume(id, resume)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const deleteResume = (resume) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .deleteResume(resume)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

//add portfolio
export const addPortfolio = (portfolio) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .addPortfolio(portfolio)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const updatePortfolio = (id, portfolio) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .updatePortfolio(id, portfolio)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const deletePortfolio = (portfolio) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .deletePortfolio(portfolio)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

//add social
export const addSocial = (portfolio) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .addSocial(portfolio)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const updateSocial = (id, social) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .updateSocial(id, social)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const deleteSocial = (social) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .deleteSocial(social)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

//add social
export const addPro = (skill) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .addPro(skill)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

//add social
export const addOther = (skill) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .addOther(skill)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const updateProfilePicture = (picture) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .updateProfilePicture(picture)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const updateCoverPicture = (picture) => {
    return async (dispatch) => {
        dispatch({ type: actionType.ON_FETCH_BEGIN });

        await api
            .updateCoverPicture(picture)
            .then((res) => {
                dispatch(fetchUserDetails());
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

// export const signup = (user) => {
//     return async (dispatch) => {
//         dispatch({ type: actionType.LOGIN_BEGIN });

//         await api
//             .signUp({ ...user })
//             .then((res) => {
//                 dispatch({
//                     type: actionType.ON_LOGIN_SUCCESS,
//                     payload: {
//                         ...res.data
//                     }
//                 });
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: actionType.ON_LOGIN_ERROR,
//                     payload: {
//                         error: error.response.data.error
//                     }
//                 });
//             });
//     };
// };
// export const updateUser = (user) => {
//     return async (dispatch) => {
//         await api
//             .update({ ...user })
//             .then((res) => {
//                 dispatch({
//                     type: actionType.USER_UPDATE,
//                     payload: {
//                         ...res.data
//                     }
//                 });
//             })
//             .catch((error) => {
//                 if (error.response?.status === 401) {
//                     dispatch({
//                         type: 'SIGN_OUT',
//                         payload: {
//                             error: 'session expired'
//                         }
//                     });
//                 } else {
//                     dispatch({
//                         type: actionType.ON_UPDATE_ERROR,
//                         payload: {
//                             error: error.response.data.error
//                         }
//                     });
//                 }
//             });
//     };
// };
// export const updatePassword = (user) => {
//     return async (dispatch) => {
//         await api
//             .updatepassword({ ...user })
//             .then((res) => {
//                 dispatch({
//                     type: actionType.USER_UPDATE,
//                     payload: {
//                         ...res.data
//                     }
//                 });
//             })
//             .catch((error) => {
//                 if (error.response?.status === 401) {
//                     dispatch({
//                         type: 'SIGN_OUT',
//                         payload: {
//                             error: 'session expired'
//                         }
//                     });
//                 } else {
//                     dispatch({
//                         type: actionType.ON_UPDATE_ERROR,
//                         payload: {
//                             error: error.response.data.error
//                         }
//                     });
//                 }
//             });
//     };
// };
