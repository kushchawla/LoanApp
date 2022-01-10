import { loanReducer } from "./reducers/loanAplicationReducer";
import {loanDetailReducer} from "./reducers/loanDetailReducer";
import {colleteralsReducer} from "./reducers/colleteralReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { budgetReducer } from "./reducers/budgetReducer";

export const rootReducer = combineReducers({
    loan: loanReducer,
    loanDetail:loanDetailReducer,
    colleterals: colleteralsReducer,
    budget:budgetReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export type StoreI = ReturnType<typeof rootReducer>;