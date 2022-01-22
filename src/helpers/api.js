import * as axios from 'axios';
import getCookie from './getCookie.js';

class Api {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url = 'https://sheltered-chamber-63274.herokuapp.com/api';
        // this.api_url = process.env.REACT_APP_API_ENDPOINT;
    }

    init = () => {
        this.api_token = getCookie(window.store.getState().authReducer.token);

        let headers = {
            Accept: 'application/json'
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
    //fetch  user details
    fetchUserDetails = () => {
        return this.init().get('/userdetails');
    };
    //set up profile
    setUpProfile = (data) => {
        return this.init().post('/updatebio', data);
    };

    //add  education
    addEducation = (data) => {
        return this.init().post('/addeducation', data);
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
