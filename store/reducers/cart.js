import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    RESTORE_CART
} from '../types/cart';


export default function cartReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { itemId, item, quantity } = action.payload;

            return {
                ...state,
                totalItemsQty: state.totalItemsQty + quantity,
                [itemId]: {
                    ...item,
                    // already in cart, update quantity
                    ...( state[itemId] && {
                        quantity: state[itemId].quantity + quantity 
                    })
                }
            }
            
        // restore cart if user reload the page
        case RESTORE_CART:
            const { items, totalItemsQty } = action.payload;

            return {
                ...items,
                totalItemsQty
            }


        case REMOVE_FROM_CART:
            return { ...state }
    
        default:
            return state;
    }
}