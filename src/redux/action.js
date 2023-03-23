import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
    console.warn('action called', data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.warn('Remove from cart action called', data);
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = (data) => {
    console.warn('empty cart action called', data);
    return {
        type: EMPTY_CART,
        data
    }
}