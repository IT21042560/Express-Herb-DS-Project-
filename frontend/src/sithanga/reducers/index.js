import authReducers from "./auth.reducers";
import cartReducers from "./cartReducers";
import {combineReducers} from'redux'

const rootReducer = combineReducers({
    auth:authReducers,
    cart:cartReducers,
})

export default rootReducer;