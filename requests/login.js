import request from './request';
import config from '../config';
import { setToken } from '../utils/token';

const BASE_URL = config.api.baseUrl;

const loginRequests = {};

loginRequests.login = async function({ username_or_email, password }){
    const token = await request.post(`${BASE_URL}/auth/login`, {
        username_or_email,
        password
    });

    setToken(token);
    
    return; 
}

export default loginRequests;