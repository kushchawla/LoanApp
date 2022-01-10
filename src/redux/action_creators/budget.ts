import {GET_BUDGET_LIST_SUCCESS} from '../action_constants'
import { BudgetI,BudgetListI,BudgetDispatchI, GET_BUDGET_SUCCESS_I } from '../types/budgetTypes'
import { Dispatch } from 'redux'
import {APP_API_URL, budgetList} from '../../constants/global'

export const getBudgetSuccess = (budget:BudgetI[]):GET_BUDGET_SUCCESS_I => {
    return {
        type : GET_BUDGET_LIST_SUCCESS,
        payload: budget 
    }
}

export const getBudget = () => async (dispatch:Dispatch<BudgetDispatchI>) => { 
await fetch(APP_API_URL+budgetList)
.then(res => res.json())
.then(res =>{
    dispatch(getBudgetSuccess(res))
})
.catch(err => console.log(err))

}
