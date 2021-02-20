import request from './request';
import config from '../config';

const BASE_URL = config.api.baseUrl;

const purchaseRequests = {};

purchaseRequests.purchase = async function(items){
    try {
        for (const item of items) {
            await request.post(`${BASE_URL}/purchases/buy`, {
                id_user_buyer: item.id_user,
                id_product: item.id_product,
                quantity: item.quantity
            }, 
            {
                token: true
            });
        }

    } catch ({message}) {
        console.error("[error while purchasing]", message);
    }
}

purchaseRequests.getAllUserPurchases = async function(id_user) {
    try {
        const userPurchases = await request.get(`${BASE_URL}/purchases/${id_user}`, {
            token: true
        });
        return userPurchases;

    } catch ({message}) {
        console.error("[error getting user purchases]", message);
    }
}

export default purchaseRequests;