import request from './request';
import config from '../config';

const BASE_URL = config.api.baseUrl;

const cartRequests = {};

cartRequests.addToCart = async function({ productId, userId, qty }) {
    try {
        const productAdded = await request.post(
            `${BASE_URL}/cart/add-item`,
            {
                id_product: productId,
                id_user: userId,
                quantity: qty
            },
            { token: true }
        )

        return productAdded;

    } catch ({message}) {
        console.error("error adding to cart " + message);
        return null;
    }
}


cartRequests.getUserCartItems = async function(userId, jwToken = '') {
    const options = {
        ...(!jwToken && { token: true }),
        ...(jwToken && {
            headers: { authorization: `Bearer ${jwToken}` }
        }) 
    }

    try {
        const items = await request.get(`${BASE_URL}/cart/${userId}`, options);
        return items;

    } catch ({message}) {
        console.error("error getting cart items " + message);
        return null;
    }
}

cartRequests.deleteItemFromCart = async function(id_user, id_product) {
    try {
        const deleted = await request.delete(
            `${BASE_URL}/cart/delete-item`, {
                id_user,
                id_product
            },
            { token: true }
        );

        return !!deleted;

    } catch ({message}) {
        console.error("error deleting item from cart", message);
        return false;
    }
}


export default cartRequests;