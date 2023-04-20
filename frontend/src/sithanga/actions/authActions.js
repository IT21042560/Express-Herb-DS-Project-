import { authConstants } from './constants'
import axiosInstance from '../helpers/axios'
import { toast } from 'react-hot-toast'



export const Login = (user) => {
    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST })
        const res = await axiosInstance.post('/Admin/Signin', user)
        if (res.status === 201) {
            const user = res.data.payload
            const token = res.data.token
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            toast.success(`Login Success, Welcome ${user.RegisterdAdmin.Full_Name} `, {
                id: "login"
            })

            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    user,
                    token
                }
            })
        }
        else {
            if (res.response.status === 401) {
                toast.error("Invalid Password..!")
                dispatch({
                    type: authConstants.LOGIN_FALIURE
                })
            }
            else if (res.status === 404) {
                toast.error("Invalid Email Address..!")
                dispatch({
                    type: authConstants.LOGIN_FALIURE
                })
            }
        }

    }
}

export const isLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token,
                        user
                    }
                })
            }

        } else {
            dispatch({
                type: authConstants.LOGIN_FALIURE,
                payload: { error: 'Failed to login' }
            })
        }
    }
}

export const SignUp = (user) => {
    console.log(user)
    return async (dispatch) => {

        dispatch({ type: authConstants.SIGN_UP_REQUEST })
        const res = await axiosInstance.post('/Admin/Signup', user)
        if (res.status === 201) {
            toast.success(`SignUp Success, Welcome ${user.fullName}`, {
                id: "signup"
            })
            dispatch({
                type: authConstants.SIGN_UP_SUCCESS,
                payload: res.data.payload
            })
        }



        else {
            if (res.status === 400) {
                toast.error("Somthing Went Wrong In Account Creating..!")
                dispatch({
                    type: authConstants.SIGN_UP_FAILURE,
                    payload: res.error
                })
            }

            else if (res.status === 404) {
                toast.error("Admin Already Registered...!")
                dispatch({
                    type: authConstants.SIGN_UP_FAILURE
                })
            }
        }
    }
}

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST })
        localStorage.clear();

        dispatch({
            type: authConstants.LOGOUT_SUCCESS
        })


    }
}

export const getAll =() => {
    return async(dispatch) => {
        dispatch({type:authConstants.GET_ALL_REQUEST})
        const res = await axiosInstance.get("/Admin/admins")

        if(res.status === 200){
            console.log("action eke" + res.data.payload)
            toast.success("Admin data fetched sucessfully..!",{
                id:'fetched success'
            })
            dispatch({
                type: authConstants.GET_ALL_SUCCESS,
                payload: res.data.payload
            })
        }
        else{
            dispatch({type: authConstants.GET_ALL_FAILURE})
        }
    }
}