import * as axios from 'axios';
import getCookie from './getCookie.js';

class Api {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url = 'https://sheltered-chamber-63274.herokuapp.com/api';
        // this.api_url = process.env.REACT_APP_API_ENDPOINT;
    }

    init = (formdata) => {
        this.api_token = getCookie(window.store.getState().authReducer.token);
        const accept = formdata ? 'multipart/form-data; boundary=<calculated when request is sent>' : 'application/json';
        let headers = {
            Accept: accept
        };

        if (this.api_token) {
            headers.Authorization = `Bearer ${this.api_token}`;
        }

        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers
        });

        return this.client;
    };

    //user sign In
    signIn = (data) => {
        return this.init().post('/login', data);
    };
    //user sign In
    signUp = (data) => {
        return this.init().post('/register', data);
    };

    //fetch  education
    fetchEducations = () => {
        return this.init().get('/educations');
    };

    //add  education
    addEducation = (data) => {
        return this.init().post('/addeducation', data);
    };

    //update  education
    updateEducation = (id, data) => {
        return this.init().put(`/updateeducation/${id}`, data);
    };

    //delete  education
    deleteEducation = (data) => {
        return this.init().delete('/deleteeducation', { data: { ...data } });
    };

    //fetch  user details
    fetchUserDetails = (userId) => {
        return this.init().get(`/profile/${userId}`);
    };
    //set up profile
    setUpProfile = (data) => {
        return this.init().post('/profilesetup', data);
    };

    //add  certification
    addCertification = (data) => {
        return this.init().post('/addcertification', data);
    };

    //update  certification
    updateCertification = (id, data) => {
        return this.init().put(`/updatecertification/${id}`, data);
    };

    //delete  certification
    deleteCertification = (data) => {
        return this.init().delete('/deletecertification', { data: { ...data } });
    };

    //add  resume
    addResume = (data) => {
        return this.init().post('/addexperience', data);
    };

    //update  resume
    updateResume = (id, data) => {
        return this.init().put(`/updateexperience/${id}`, data);
    };

    //delete  Resume
    deleteResume = (data) => {
        return this.init().delete('/deleteexperience', { data: { ...data } });
    };

    //add  portfolio
    addPortfolio = (data) => {
        return this.init(true).post('/addportfolio', data);
    };

    //update  portfolio
    updatePortfolio = (id, data) => {
        console.log(data);
        return this.init().put(`/updateportfolio/${id}`, data);
    };

    //delete  portfolio
    deletePortfolio = (data) => {
        return this.init().delete('/deleteportfolio', { data: { ...data } });
    };

    //add  social link
    addSocial = (data) => {
        return this.init().post('/addonlinelink', data);
    };

    //user update
    update = (data) => {
        return this.init().post('/updateuser', data);
    };
    //user password
    updatepassword = (data) => {
        return this.init().post('/updatepassword', data);
    };
}

export default new Api();
