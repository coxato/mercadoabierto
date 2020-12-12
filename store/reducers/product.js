import { nanoid } from 'nanoid';

export default function productCreationReducer(state, action) {
    switch (action.type) {
        case 'new-id_album':
            return { ...state, id_album: nanoid() }
    
        default:
            return state;
    }
}