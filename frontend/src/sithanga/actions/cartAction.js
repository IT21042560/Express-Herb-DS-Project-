import { authConstants, cartConstant } from "./constants";
import axiosIntance from "../helpers/axios";
import {toast} from 'react-hot-toast'

export const GetCart = () => {
    return async (dispatch) => {
        dispatch({type: cartConstant.GET_CART_REQUEST})
        const res = await axiosIntance.get('/Cart/getCart')
        console.log(res)
        if(res.status === 200){
            toast.success("Data Fetched..!" ,{
                id: 'fetch seccess'
            })
            dispatch({
                type:cartConstant.GET_CART_SUCCESS,
                payload:res.data.payload
            })
        }else{
            toast.error("Fetched error..!",{
                id: 'ferr'
            })
            dispatch({type:cartConstant.GET_CART_FAILURE})
        }
    }
}