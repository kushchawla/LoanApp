import * as actions from '../action_constants';
import {  BudgetDispatchI, BudgetListI} from "../types/budgetTypes";

const budgetInitialState:BudgetListI = {
    data:[]
};

export const budgetReducer = (state:BudgetListI = budgetInitialState, action:BudgetDispatchI):BudgetListI => {

    switch(action.type){

        case actions.GET_BUDGET_LIST_SUCCESS:
            return {
               data: action.payload
            }
        default:
            return state;

    }
}