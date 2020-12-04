import request from './request';
import config from '../config';

// timeout to perform ajax requests
let timeout;

const BASE_URL = config.api.baseUrl;

const signupRequests = {};

signupRequests.checkUsernameTaken = function(username){
    return new Promise((resolve) => {
        clearTimeout(timeout);
        timeout =  setTimeout(() => {
            const random = Math.round(Math.random()) ? true : false;
            resolve(random)
        }, 600);
    })
}

signupRequests.checkEmailTaken = async function(email){
    return new Promise((resolve) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const random = Math.round(Math.random()) ? true : false;
            resolve(random)
        }, 600);
    })
}


export default signupRequests;