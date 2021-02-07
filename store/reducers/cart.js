import {
    ADD_TO_CART,
    RESTORE_CART,
    QUIT_ONE_QTY,
    QUIT_ITEM,
    VOID_CART
} from '../types/cart';


export default function cartReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const { itemId, item, quantity } = action.payload;
            let qty = quantity;
            // already in cart, update quantity
            if(state[itemId]){
                qty += state[itemId].quantity;
            }

            return {
                ...state,
                totalItemsQty: state.totalItemsQty + quantity,
                [itemId]: {
                    ...item,
                    quantity: qty
                }
            }
        }
            
        // restore cart if user reload the page
        case RESTORE_CART: {
            const { items, totalItemsQty } = action.payload;

            return {
                ...items,
                totalItemsQty
            }
        }


        case QUIT_ONE_QTY: {
            const { itemId } = action.payload;
            const itemCopy = { ...state[itemId] };

            const newQty = itemCopy.quantity - 1;

            if(newQty > 0){
                return {
                    ...state,
                    [itemId]: {
                        ...state[itemId],
                        quantity: newQty
                    }
                }
            }
            else{
                delete state[itemId];
                return state;
            }
        }


        case QUIT_ITEM: {
            const { itemId } = action.payload;
            delete state[itemId];
            return state;
        }


        case VOID_CART:
            return { totalItemsQty: 0 }

    
        default:
            return state;
    }
}