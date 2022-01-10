import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { budgetReducer } from "../redux/reducers/budgetReducer";
import * as actions from '../redux/action_creators'
import configureMockStore from 'redux-mock-store'
import {APP_API_URL, budgetList} from '../constants/global'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { GET_BUDGET_LIST_SUCCESS } from '../redux/action_constants'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

beforeEach(() => {
    fetchMock.restore();
})
const budgets = [{"type":"Construction","subtype":"Raw Materials","lumsum":4000000},{"type":"Construction","subtype":"Labour Cost","lumsum":1000000}];

describe("Checking budgetsReducer", () => {
    
    test("should return default state", () =>{
        const newState = budgetReducer(undefined, {});
        expect(newState.data).toEqual([]);
    });

  
   
    test('should create GET_BUDGET_LIST_SUCCESS when searching', () => {
        fetchMock.getOnce(APP_API_URL+budgetList, budgets)
    
        const expectedActions = [
            {
                type : GET_BUDGET_LIST_SUCCESS,
                payload: budgets
            }
        ]
        const store = mockStore({ search: {
          result: {}
        }})
    
        return store.dispatch(actions.getBudget())
          .then((data) => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
          })
    
      })

     
 
    

})
