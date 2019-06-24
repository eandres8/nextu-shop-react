import { SET_PRODUCTS } from '../constants';

export const setearProductos = ( productos ) => ({
    type: SET_PRODUCTS,
    payload: {
        productos
    }
});