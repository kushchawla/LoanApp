import { Dispatch } from "redux"
import { APP_API_URL, colleteralsList } from "../../constants/global"
import {GET_LOAN_COLLETERALS, GET_COLLETERAL_LIST_SUCCESS} from '../action_constants'

export type ColleteralI = {
    type:string,
    document_received:boolean,
    current_value:number,
    future_value:number,
    status:string,
    pledge_signed_on:Date

}
export type ColleteralListI = {
    data:ColleteralI[]
}

export type GET_COLLETERAL_SUCCESS_I = {
    type : typeof GET_COLLETERAL_LIST_SUCCESS,
    payload: ColleteralI[]
}

export type ColleteralDispatchI =  GET_COLLETERAL_SUCCESS_I;