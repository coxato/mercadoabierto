import request from './request';
import config from '../config';

const BASE_URL = config.api.baseUrl;

const productRequests = {};

productRequests.saveProduct = async function(productData){
    try {
        const saved = await request.post(`${BASE_URL}/products/`, productData, { token: true });
        return saved;

    } catch ({message}) {
        console.error("[error saving product]", message);
    }
}


export default productRequests;