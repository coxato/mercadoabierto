import {
    ADD_INFO,
    UPDATE_MONEY,
    REMOVE_INFO
} from '../types/user';


export default function userReducer(state = {}, action) {
    switch (action.type) {
        case ADD_INFO:
            return { ...action.payload }

        case UPDATE_MONEY:
            return { ...state, money: action.money }
    
        case REMOVE_INFO:
            return {};

        default:
            return state;
    }
}