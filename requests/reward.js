import request from './request';
import config from '../config';

const BASE_URL = config.api.baseUrl;

const rewardRequests = {};

rewardRequests.checkRewardTime = async function() {
    try {
        const checked = await request.get(`${BASE_URL}/rewards/check`, { token: true });
        return checked;

    } catch ({message}) {
        console.error("[error checking reward time] " + message);
    }
}

rewardRequests.giveReward = async function() {
    try {
        const given = await request.get(`${BASE_URL}/rewards/give`, { token: true });
        return given;
        
    } catch ({message}) {
        console.error("[error giving reward] " + message);
    }
}


export default rewardRequests;