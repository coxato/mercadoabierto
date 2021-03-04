import React, { createContext, useContext, useReducer } from 'react';
// reducer
import productCreationReducer from './reducers/productCreation';

const StateContext = createContext();
const DispatchContext = createContext();

const defaultState = {
    productData: {
        id_album: '',
        title: '',
        description: '',
        category: '',
        quantity: 0,
        price: 0,
        cover: '',
        new: 1
    },
    photos: []
}

const ProductCreationHOC = ({ children, productEditData = null }) => {
    // productEditData is not null when is editing
    const _defaultState = productEditData || defaultState;

    const [state, dispatch] = useReducer(
        productCreationReducer,
        {
            ..._defaultState,
            isEditing: !!productEditData
        }
    );

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

// custom hooks
const useProductState = () => {
    const state = useContext(StateContext);
    
    return state;
}

const useProductDispatch = () => {
    const dispatch = useContext(DispatchContext);

    return dispatch
}

// public custom hook
const useProductCreation = () => ({
    state: useProductState(),
    dispatch: useProductDispatch()
});

 
export default ProductCreationHOC;
export {
    useProductCreation,
    useProductState
}