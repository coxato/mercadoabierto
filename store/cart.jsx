import React, { createContext, useContext, useReducer } from 'react';
// reducer
import cartReducer from './reducers/cart';
// types
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    RESTORE_CART
} from './types/cart';

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
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    // TODO: check if the state can be modified, like
    // let myState = getCartItems(); myState.something = 123;
    // I think react is prepare to not allow that 
    function getCartItems(){
        return state;
    }

    function addCartItem(itemId, item, quantity){
        dispatch({
            type: ADD_TO_CART,
            payload: { itemId, item, quantity }
        })
    }

    function removeCartItem(itemId, quantity){
        dispatch({
            type: REMOVE_FROM_CART,
            payload: { itemId, quantity }
        })
    }

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

    return {
        getCartItems,
        addCartItem,
        removeCartItem,
        restoreCart
    }
}

 
export default CartHOC;
export {
    useCart
}