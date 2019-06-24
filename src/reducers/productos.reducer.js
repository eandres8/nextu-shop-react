// constants
import { SET_PRODUCTS } from '../constants';

// initialState
import { initialState } from './initialState';

const productos = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                ...{productos: Array.from(action.payload.productos)}
            };

        default:
            return state;
    }
}

export default productos;