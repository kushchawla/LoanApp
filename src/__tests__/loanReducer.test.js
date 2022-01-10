import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as actions from '../redux/action_constants';
import { loanReducer } from "../redux/reducers/loanAplicationReducer";

describe("Checking loanReducer", () => {
    
    test("should return default state", () =>{
        const newState = loanReducer(undefined, {});
        expect(newState.data).toEqual([]);
    });

    test("should return loading true on FETCH_LOADING", ()=>{
        const newState = loanReducer(undefined, {
            type:actions.FETCH_LOADING
        })
        expect(newState.loading).toBe(true);
    })

    test("should return error on FETCH_FAILURE", ()=>{
        const newState = loanReducer(undefined, {
            type:actions.FETCH_FAILURE,
            payload:'Error'
        })
        expect(newState.error).toBe('Error');
    })

    test("should receive new state if receiving action", ()=>{
        const loans = [{id:1, firstname:"Kush", purpose:"Home Loan", required_amount:3000000},
                        {id:2, firstname:"Mohit", purpose:"Bussiness Loan", required_amount:1000000}]
        const newState = loanReducer(undefined, {
            type:actions.GET_APPROVED_LOANS_SUCCESS,
            payload:loans
        });
        expect(newState.data).toBe(loans);
    })

})
