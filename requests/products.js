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
        throw new Error(message);
    }
}


productRequests.getProductById = async function(id){
    try {
        const product = await request.get(`${BASE_URL}/products/${id}`);
        return product;

    } catch ({message}) {
        console.error("[error getting product]", message);
        throw new Error(message);
    }
}


productRequests.getProductsByCategory = async function({
    category, 
    page = 1, 
    orderBy = 'date', 
    order = 'DESC', 
    limit = 20
}){
    try {
        const url = `${BASE_URL}/products/category/${category}?page=${page}&orderBy=${orderBy}&order=${order}&limit=${limit}`;
        
        const products = await request.get(url);
        return products;

    } catch ({message}) {
        console.error("[error getting products by category]", message);
        throw new Error(message);
    }
}


export default productRequests;