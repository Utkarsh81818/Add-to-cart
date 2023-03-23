import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import axios from "axios";

export const productList = () => {
    return {
        type: PRODUCT_LIST,
    }
}

// export const setProductList = (data) => {
//     console.warn('set action called');
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }
