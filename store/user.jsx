import React, { 
    createContext, 
    useContext, 
    useReducer, 
    // useEffect, 
    // useState 
} from 'react';

// reducer
import userReducer from './reducers/user';
// types
import { ADD_INFO, REMOVE_INFO, UPDATE_MONEY } from './types/user';
// utils
import { setStorageValues, getStorageValues, cleanStorageValues } from '../utils/localStorage';

const StateContext = createContext();
const DispatchContext = createContext();


const UserHOC = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {});

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                { children }
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

// custom hooks
const useUser = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    function checkIsLogged(){
        // get from localstorage if user reload the page
        if(Object.keys(state).length === 0){
            const userJson = getStorageValues('userInfo');

            if(userJson){
                saveUserInfo(userJson);
                return true;
            }; 
    
            return false;
        }

        return true;
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

    function updateMoney(ammount){
        const userInfo = getStorageValues('userInfo');

        const newAmmount = parseInt(userInfo.money) + ammount;
        userInfo.money = newAmmount;
        // save in localstorage
        setStorageValues('userInfo', userInfo);
        // save in state
        dispatch({
            type: UPDATE_MONEY,
            money: newAmmount
        })
    }

    return {
        checkIsLogged,
        saveUserInfo,
        removeUserInfo,
        updateMoney
    }
}

const useUserInfo = () => {
    const state = useContext(StateContext);
    return state;
}

 
export default UserHOC;
export {
    useUser,
    useUserInfo
}