import React, { createContext, useContext, useReducer } from 'react';
// reducer
import cartReducer from './reducers/cart';
// types
import {
    ADD_TO_CART,
    RESTORE_CART,
    QUIT_ONE_QTY,
    VOID_CART,
    QUIT_ITEM
} from './types/cart';
// request
import cartRequests from '../requests/cart';

const StateContext = createContext();
const DispatchContext = createContext();


const CartHOC = ({ children }) => {
    
    const [state, dispatch] = useReducer(cartReducer, { totalItemsQty: 0 });

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

// custom hooks
const useCart = () => {
    const dispatch = useContext(DispatchContext);

    function addCartItem(itemId, item, quantity){
        dispatch({
            type: ADD_TO_CART,
            payload: { itemId, item, quantity }
        })
    }

    function remove1QtyItem(itemId){
        dispatch({
            type: QUIT_ONE_QTY,
            payload: { itemId }
        })
    }

    function removeItem(itemId){
        dispatch({
            type: QUIT_ITEM,
            payload: { itemId }
        })
    }

    function voidCart(){
        dispatch({
            type: VOID_CART
        })
    }

    // restore cart when user reload the page
    function restoreCart(cartItems){

        const parsedItems = {};
        for(let item of cartItems){
            parsedItems[item.id_product] = item;
        }

        const totalItemsQty = cartItems.reduce((count, item) => {
            return count + item.quantity;
        }, 0);

        dispatch({
            type: RESTORE_CART,
            payload: { items: parsedItems, totalItemsQty }
        })
    }

    // get items from DB
    async function getCartItemsForDB(userId) {
        if(userId){
            try {
                const items = await cartRequests.getUserCartItems(userId);
                // restore cart
                if(items?.length) restoreCart(items);
    
            } catch ({message}) {
                console.error("[error getting cart from DB] " + message);
            }
        }
    }

    return {
        addCartItem,
        restoreCart,
        remove1QtyItem,
        removeItem,
        voidCart,
        getCartItemsForDB
    }
}


const useCartInfo = () => {
    const state = useContext(StateContext);
    return state;
}

 
export default CartHOC;
export {
    useCart,
    useCartInfo
}