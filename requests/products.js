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

productRequests.updateProduct = async function(newProductData){
    const url = `${BASE_URL}/products/update?id_product=${newProductData.id_product}&id_user=${newProductData.id_user}`;
    // delete innecessary props to update
    delete newProductData.id_product;
    delete newProductData.id_user;
    delete newProductData.avaliable;
    delete newProductData.date;

    try {
        const updated = await request.put(url, newProductData, { token: true });
        return updated;

    } catch ({message}) {
        console.error("[error updating product]", message);
        throw new Error(message);
    }
}


productRequests.getProductById = async function(id, jwToken = null){
    const options = {
        ...(jwToken && {
            headers: { authorization: `Bearer ${jwToken}` }
        }) 
    }

    try {
        const product = await request.get(`${BASE_URL}/products/${id}`, options);
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

productRequests.getAllUserProducts = async function(username) {
    try {
        
        const userProducts = await request.get(`${BASE_URL}/products/user-products/${username}`);
        return userProducts;

    } catch ({message}) {
        console.error("[Error getting all the products on sale of user] " + message);
    }
}

// get suggestions while user is writing in searchbar

let timeout; // to perform ajax request

productRequests.searchBarSuggestions = function(searchTxt, maxSuggestions) {
    return new Promise((resolve, reject) => {
        clearTimeout(timeout);
        
        const url = `${BASE_URL}/products/search-text-suggestions?search=${searchTxt}&maxSuggestions=${maxSuggestions}`;

        timeout = setTimeout(() => {
            request.get(url)
                .then(resolve)
                .catch( err => reject(err.message));
        }, 300);
    });
}


export default productRequests;