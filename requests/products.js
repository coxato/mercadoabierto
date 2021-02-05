import request from './request';
import config from '../config';
import objUtils from '../utils/objects';

const BASE_URL = config.api.baseUrl;

const productRequests = {};

// like an TypeScript interface
const searchProductsProps = {
    filter: '',
    view: '',
    page: 1, 
    orderBy: 'date', 
    order: 'DESC', 
    limit: 20,
}

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

async function _getProducts(searchType, value, options) {
    // get only truthy values
    const { filter, view, page, orderBy, order, limit } = objUtils.mix(options, searchProductsProps);

    try {
        let endPointName;
        if(searchType === 'category') endPointName = `category/${value}?`;
        else endPointName = `search?search=${value}&`;

        let url = `${BASE_URL}/products/${endPointName}page=${page}&orderBy=${orderBy}&order=${order}&limit=${limit}`;
        
        if(filter) url += `&filter=${filter}`;
        if(view) url += `&view=${view}`;

        const products = await request.get(url);
        return products;

    } catch ({message}) {
        console.error(
            `[error getting products by ${searchType}]`,
            message
        );
        throw new Error(message);
    }

}


productRequests.getProductsByCategory = async function(category, options = searchProductsProps){
    const products = await _getProducts('category', category, options);
    return products;
}

productRequests.getProductsByInputSearch = async function(searchStr, options = searchProductsProps) {
    const products = await _getProducts('search', searchStr, options);
    return products;
}


export default productRequests;