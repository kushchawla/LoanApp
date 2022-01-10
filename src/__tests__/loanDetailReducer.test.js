import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as actions from '../redux/action_constants';
import { loanDetailReducer } from "../redux/reducers/loanDetailReducer";

describe("Checking loanDetailReducer", () => {
    
    test("should return default state", () =>{
        const newState = loanDetailReducer(undefined, {});
        expect(newState.data).toEqual([]);
    });

    test("should return loading true on FETCH_LOADING", ()=>{
        const newState = loanDetailReducer(undefined, {
            type:actions.FETCH_LOADING
        })
        expect(newState.loading).toBe(true);
    })

    test("should return error on FETCH_FAILURE", ()=>{
        const newState = loanDetailReducer(undefined, {
            type:actions.FETCH_FAILURE,
            payload:'Error'
        })
        expect(newState.error).toBe('Error');
    })

    test("should receive new state if receiving action GET_LOAN_DETAIL", ()=>{
        const loanDetail = [{id:1, firstname:"Kush", purpose:"Home Loan", required_amount:3000000, status:"Approved"}]
        const newState = loanDetailReducer(undefined, {
            type:actions.GET_LOAN_DETAIL,
            payload:loanDetail
        });
        expect(newState.data.length).toBe(1);
        expect(newState.data).toBe(loanDetail);
    })

})
