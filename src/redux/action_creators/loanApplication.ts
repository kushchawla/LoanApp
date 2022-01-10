import * as Req from '../action_constants';
import {Dispatch} from 'redux';
import {APP_API_URL, LoanAPP, LoanDetail} from '../../constants/global';
import { DispatchI, FetchLoanDetailSuccessI, ApprovedLoansI, FetchRequestI, FetchApplicationsSuccessI, FetchApplicationsFailureI, ApplicationI, LoanDetailI } from '../types/loanApplicationTypes';


export const fetchLoanApplications = ()=>{
    return {
        type:Req.FETCH_LOADING
    }
}


export const fetchLoanSuccess = (loans:ApplicationI[]):FetchApplicationsSuccessI=>{
    return {
        type:Req.GET_APPROVED_LOANS_SUCCESS,
        payload:loans
    }
}

export const fetchLoanDetailSuccess = (loanDetail:LoanDetailI[]):FetchLoanDetailSuccessI=>{
   
    return {
        type:Req.GET_LOAN_DETAIL,
        payload:loanDetail,
        error:''
    }
}

export const fetchLoanFailure = (error:string):FetchApplicationsFailureI => {
    return {
        type:Req.FETCH_FAILURE,
        payload:error
    }
}

export const fetchLoanRequest  = ():FetchRequestI => {
    return {
        type:Req.FETCH_LOADING
    }
}

export const getApprovedLoansSuccess = (loans:ApprovedLoansI[])=>{
    return {
        type:Req.GET_APPROVED_LOANS_SUCCESS,
        payload:loans
    }
}

export const fetchLoan = () => {
    return async function(dispatch:Dispatch<DispatchI>){
        dispatch(fetchLoanRequest());
        await fetch(APP_API_URL + LoanAPP)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            dispatch(fetchLoanSuccess(res))
        })
        .catch(err  => {
            dispatch(fetchLoanFailure(err))
        })
    }
} 

export function APIRequest(who = 'google') {
    if (who === 'google') {
      return fetch('https://google.com').then(res => res.json())
    } else {
      return 'no argument provided'
    }
  }


export const fetchLoanDetail = (id:any) => {
    return async function(dispatch:Dispatch<DispatchI>){
        dispatch(fetchLoanRequest());
        await fetch(APP_API_URL + LoanDetail + id)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            dispatch(fetchLoanDetailSuccess(res))
        })
        .catch(err  => {
            dispatch(fetchLoanFailure(err))
        })
    }
} 