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

    //update profile picture
    updateProfilePicture = (data) => {
        return this.init().post('/changeprofilepic', data);
    };

    //update cover picture
    updateCoverPicture = (data) => {
        return this.init().post('/changecoverimage', data);
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

    //update  social
    updateSocial = (id, data) => {
        return this.init().put(`/updateonlinelink/${id}`, data);
    };
    //delete  social
    deleteSocial = (data) => {
        return this.init().delete('/deleteonlinelink', { data: { ...data } });
    };

    //Pro skill
    //add  professional skill
    addPro = (data) => {
        return this.init().post('/addproskill', data);
    };

    //update  professional skill
    updatePro = (id, data) => {
        return this.init().put(`/updateproskill/${id}`, data);
    };
    //delete  professional skill
    deletePro = (data) => {
        return this.init().delete('/deleteproskill', { data: { ...data } });
    };

    //Other skills
    //add  Other skills
    addOther = (data) => {
        return this.init().post('/addotherskill', data);
    };

    //update  Other skills
    updateOther = (id, data) => {
        return this.init().put(`/updateotherskill/${id}`, data);
    };
    //delete  Other skills
    deleteOther = (data) => {
        return this.init().delete('/deleteotherskill', { data: { ...data } });
    };

    //user update
    update = (data) => {
        return this.init().post('/updateuser', data);
    };
    //user password
    updatepassword = (data) => {
        return this.init().post('/updatepassword', data);
    };

    //enterprise pages

    //fetch  associations
    fetchAssociations = () => {
        return this.init().get('/associations');
    };

    //fetch  schools
    fetchSchools = () => {
        return this.init().get('/schools');
    };

    //fetch  companies
    fetchCompanies = () => {
        return this.init().get('/companies');
    };

    //add school
    addSchool = (data) => {
        return this.init().post('/sregister', data);
    };
    //add school
    addCompany = (data) => {
        return this.init().post('/cregister', data);
    };
    //add school
    addAssociation = (data) => {
        return this.init().post('/aregister', data);
    };

    //fetch school events
    fetchSchoolEvents = (id) => {
        return this.init().get(`/schoolevents/${id}`);
    };
    //fetch association events
    fetchAssociationEvents = (id) => {
        return this.init().get(`/associationevents/${id}`);
    };
    //fetch company events
    fetchCompanyEvents = (id) => {
        return this.init().get(`/companyevents/${id}`);
    };

    //fetch school branch
    fetchSchoolBranches = (id) => {
        return this.init().get(`/schoolbranches/${id}`);
    };
    //fetch association branch
    fetchAssociationBranches = (id) => {
        return this.init().get(`/associationbranches/${id}`);
    };
    //fetch company branch
    fetchCompanyBranches = (id) => {
        return this.init().get(`/companybranches/${id}`);
    };

    //create school events
    createSchoolEvents = (id, data) => {
        return this.init().post(`/createschoolevent/${id}`, data);
    };
    //create association events
    createAssociationEvents = (id, data) => {
        return this.init().post(`/createassociationevent/${id}`, data);
    };
    //create association events
    createCompanyEvents = (id, data) => {
        return this.init().post(`/createcompanyevent/${id}`, data);
    };

    //create school branch
    createSchoolBranch = (id, data) => {
        return this.init().post(`/createschoolbranch/${id}`, data);
    };
    //create association branch
    createAssociationBranch = (id, data) => {
        return this.init().post(`/createassociationbranch/${id}`, data);
    };
    //create association branch
    createCompanyBranch = (id, data) => {
        return this.init().post(`/createcompanybranch/${id}`, data);
    };

    //create school gallery
    createSchoolGallery = (id, data) => {
        return this.init().post(`/addschoolgallery/${id}`, data);
    };
    //create association gallery
    createAssociationGallery = (id, data) => {
        return this.init().post(`/addassociationgallery/${id}`, data);
    };
    //create company branch
    createCompanyGallery = (id, data) => {
        return this.init().post(`/addcompanygallery/${id}`, data);
    };

    //fetch school Gallery
    fetchSchoolGalleries = (id) => {
        return this.init().get(`/schoolgalleries/${id}`);
    };
    //fetch association Gallery
    fetchAssociationGalleries = (id) => {
        return this.init().get(`/associationgalleries/${id}`);
    };
    //fetch company Gallery
    fetchCompanyGalleries = (id) => {
        return this.init().get(`/companygalleries/${id}`);
    };
}

export default new Api();
