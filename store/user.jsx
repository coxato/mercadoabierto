import React, { createContext, useContext, useReducer } from 'react';
// reducer
import userReducer from './reducers/user';
// types
import { ADD_INFO, REMOVE_INFO } from './types/user';
// utils
import { setStorageValues, getStorageValues, cleanStorageValues } from '../utils/localStorage';

const StateContext = createContext();
const DispatchContext = createContext();


const UserHOC = ({ children }) => {
    
    const [state, dispatch] = useReducer(userReducer, {});

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

// custom hooks
const useUser = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);


    function getUserInfo(){
        // get from localstorage if user reload the page
        if(Object.keys(state).length === 0){
            const userJson = getStorageValues('userInfo');

            if(userJson){
                saveUserInfo(userJson);
                return userJson;
            }; 
    
            return null;
        }

        // is already in state and localStorage
        return state;
    }

    
    function saveUserInfo(userInfoObj){
        // save in localstorage if is first time, or user reload the page
        if(Object.keys(state).length === 0){
            setStorageValues('userInfo', userInfoObj);
        }

        dispatch({
            type: ADD_INFO,
            payload: userInfoObj
        })
    }

    function removeUserInfo(){
        cleanStorageValues('userInfo');

        dispatch({
            type: REMOVE_INFO
        })
    }

    return {
        getUserInfo,
        saveUserInfo,
        removeUserInfo
    }
}

 
export default UserHOC;
export {
    useUser
}