// constants
import { SET_PRODUCTS, SET_CARRITO, REPLACE_CARRITO } from '../constants';

// initialState
import { initialState } from './initialState';

const productos = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                productos: Array.from(action.payload.productos)
            };

        case SET_CARRITO:
            return {
                ...state,
                carrito: [...state.carrito, action.payload.producto]
            };

        case REPLACE_CARRITO:
            let carrito = state.carrito.map( c => {
                if ( c.id == action.payload.carrito.id )
                    return action.payload.carrito;
                else
                    return c;
            } );
            return {
                ...state,
                carrito
            };

        default:
            return state;
    }
}

export default productos;