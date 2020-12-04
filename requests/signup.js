import request from './request';
import config from '../config';

// timeout to perform ajax requests
let timeout;

const BASE_URL = config.api.baseUrl;

const signupRequests = {};

// check avaliable username or email on input change
signupRequests.checkAvaliable = function(searchBy, valueToSearch){
    return new Promise((resolve, reject) => {
        
        clearTimeout(timeout);
        timeout =  setTimeout(() => {
            request.get(`${BASE_URL}/users/check-avaliable/?searchBy=${searchBy}&valueToSearch=${valueToSearch}`)
                .then( isAvaliable =>  resolve(isAvaliable) )
                .catch( err => reject(err));
        }, 800);
    
    })
}


signupRequests.signupUser = async function(userDataObj){
    const isSignup = await request.post(`${BASE_URL}/users/`, userDataObj)
    return isSignup;
}


export default signupRequests;