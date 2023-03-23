import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
import {takeEvery, put} from 'redux-saga/effects'
import axios from "axios";

function* getProducts(){
    let data = yield axios.get('https://dummyjson.com/products');
    data = yield data.data.products;
    console.warn('action called', data);
    yield put({type:SET_PRODUCT_LIST, data})
}

function* productSaga()
{
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;
