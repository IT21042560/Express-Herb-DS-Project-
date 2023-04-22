import authReducers from "./auth.reducers";
import cartReducers from "./cartReducers";
import orderReducers from './order.Reducer'
import {combineReducers} from'redux'

const rootReducer = combineReducers({
    auth:authReducers,
    cart:cartReducers,
    order:orderReducers,

})

export default rootReducer;