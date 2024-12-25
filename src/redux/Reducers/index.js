import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartReducer'
import modalReducer from './modalReducer'

const rootreducer = combineReducers({
    cart : cartReducer,
    modal: modalReducer,
})
export default rootreducer