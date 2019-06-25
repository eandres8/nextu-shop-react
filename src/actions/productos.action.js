import { SET_PRODUCTS, SET_CARRITO, REPLACE_CARRITO } from '../constants';

export const setearProductos = (productos) => ({
    type: SET_PRODUCTS,
    payload: {
        productos
    }
});

export const setCarrito = ( producto ) => ({
    type: SET_CARRITO,
    payload: {
        producto
    }
});

export const replaceCarrito = (carrito) => ({
    type: REPLACE_CARRITO,
    payload: {
        carrito
    }
});