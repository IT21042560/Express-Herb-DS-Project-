import { cartConstant } from "./constants";
import axiosIntance from "../helpers/axiosCart";
import toast from 'react-hot-toast'

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

export const deleteCart = (id) => {
    return async (dispatch) => {
        dispatch({ type: cartConstant.DELETE_CART_REQUEST})
        const res = await axiosIntance.post('/Cart/deletecart',id)
        if (res.status === 200) {
            toast.success("Order rejected..! ", {
                id: 'del'
            })
            dispatch({ type:  cartConstant.DELETE_CART_SUCCESS })
            dispatch(GetCart())

        } else if (res.status === 500) {
            toast.error("Order rejection failed..!", {
                id: "fail"
            })
            dispatch({
                type: cartConstant.DELETE_CART_FAILED,

            })
        } 
        
    }
}