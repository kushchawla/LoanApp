import { ApplicationI, DispatchI, LoansI, LoanDetailI } from "../types/loanApplicationTypes"
import * as actions from '../action_constants';
import { LoanDetail } from "../../constants/global";

const loanInitialState:LoansI = {
    data: [],
    loading:false,
    error:''
};

export const loanReducer = (state:LoansI = loanInitialState, action:DispatchI):LoansI => {

    switch(action.type){
        case actions.FETCH_LOADING:
            return {
                ...state,
                loading:true
            }
        case  actions.GET_APPROVED_LOANS_SUCCESS:
            
            return {
                data:action.payload,
                loading:false,
                error:''
            }
        case actions.FETCH_FAILURE:
            return {
                error:action.payload,
                loading:false,
            
            }

        default:
            return state;

    }
}