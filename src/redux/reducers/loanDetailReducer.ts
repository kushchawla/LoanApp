import { ApplicationI, DispatchI, LoansI, LoanDetailI } from "../types/loanApplicationTypes"
import * as actions from '../action_constants';
import { LoanDetail } from "../../constants/global";
import { LoansDetailI } from "../types/loanApplicationTypes";

const loanInitialState:LoansDetailI = {
    data: [],
    loading:false,
    error:''
};

export const loanDetailReducer = (state:LoansDetailI = loanInitialState, action:DispatchI):LoansDetailI => {

    switch(action.type){
        case actions.FETCH_LOADING:
            return {
                ...state,
                loading:true
            }
       
        case actions.FETCH_FAILURE:
            return {
                error:action.payload,
                loading:false,
                data:[]
            }

        case actions.GET_LOAN_DETAIL:
            return {
                data:action.payload,
                loading:false,
                error:''
            }
        default:
            return state;

    }
}