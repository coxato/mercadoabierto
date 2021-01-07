import request from './request';
import config from '../config';

const BASE_URL = config.api.baseUrl;

const userRequests = {};

userRequests.getInfoLogged = async function(){
    const basicUserData = await request.get(`${BASE_URL}/users/logged-info`, { token: true });
    return basicUserData; 
}

userRequests.getUserMoney = async function(id_user){
    const money = await request.get(`${BASE_URL}/users/money/${id_user}`, { token: true });
    return money; 
}

export default userRequests;