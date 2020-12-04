import request from './request';
import config from '../config';

const BASE_URL = config.api.baseUrl;

const loginRequests = {};

loginRequests.login = async function({ username_or_email, password }){
    const goodLogin = await request.post(`${BASE_URL}/auth/login`, {
        username_or_email,
        password
    });
    return goodLogin;  
}

export default loginRequests;