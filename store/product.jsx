import React, { createContext, useContext, useReducer } from 'react';
// reducer
import productCreationReducer from './reducers/product';

// this is a really verbose solution for a simple problem
// but I just want to practice a concept that I seed in a blog
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

// this file is just for create a random id and use it in multiple components,  
// yeah, just that xD, but others files in this folder (./store) have more functionalities

const StateContext = createContext();
const DispatchContext = createContext();


const ProductCreationHOC = ({ children }) => {
    
    const [state, dispatch] = useReducer(productCreationReducer, { id_album: '' });

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
    useProductCreation
}