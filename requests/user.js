import request from './request';
import config from '../config';

const BASE_URL = config.api.baseUrl;

const userRequests = {};

userRequests.getInfoLogged = async function(){
    const basicUserData = await request.get(`${BASE_URL}/users/logged-info`, { token: true });
    return basicUserData; 
}

export default userRequests;