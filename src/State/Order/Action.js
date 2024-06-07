import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./ActionType"

export const createOrder = (req)=>async (dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data} = api.post('/api/orders/',req.address)
        if(data.id){
            req.navigate({search:`step=3&order_id=${data.id}`})
        }
        console.log("crated order",data)
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}

export const getOrderById = (orderId)=>async (dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data} = api.get(`/api/orders/${orderId}`)
        console.log(`order by id:${orderId}`,data)
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}

// export const getOrderHistory = (req)=>async (dispatch)=>{
//     dispatch({type:CREATE_ORDER_REQUEST})
//     try {
//         const {data} = api.post('/api/orders/',req)
//         dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
//     } catch (error) {
//         dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
//     }
// }

