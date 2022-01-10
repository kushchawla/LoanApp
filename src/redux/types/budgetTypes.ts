import { Dispatch } from "redux"
import { APP_API_URL, colleteralsList } from "../../constants/global"
import {GET_BUDGET_LIST, GET_BUDGET_LIST_SUCCESS} from '../action_constants'

export type BudgetI = {
    type:string,
    subtype:string,
    lumsum?:number

}
export type BudgetListI = {
    data:BudgetI[]
}

export type GET_BUDGET_SUCCESS_I = {
    type : typeof GET_BUDGET_LIST_SUCCESS,
    payload: BudgetI[]
}

export type BudgetDispatchI =  GET_BUDGET_SUCCESS_I;