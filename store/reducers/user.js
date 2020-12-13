import {
    ADD_INFO,
    REMOVE_INFO
} from '../types/user';


export default function userReducer(state = {}, action) {
    switch (action.type) {
        case ADD_INFO:
            return { ...action.payload }
    
        case REMOVE_INFO:
            return {};

        default:
            return state;
    }
}