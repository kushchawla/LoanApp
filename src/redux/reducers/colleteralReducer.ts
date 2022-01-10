import * as actions from '../action_constants';
import {  ColleteralDispatchI, ColleteralListI} from "../types/colleteralTypes";

const colleteralInitialState:ColleteralListI = {
    data:[]
};

export const colleteralsReducer = (state:ColleteralListI = colleteralInitialState, action:ColleteralDispatchI):ColleteralListI => {

    switch(action.type){

        case actions.GET_COLLETERAL_LIST_SUCCESS:
            return {
               data: action.payload
            }
        default:
            return state;

    }
}