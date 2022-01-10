import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { colleteralsReducer } from "../redux/reducers/colleteralReducer";
import * as actions from '../redux/action_creators'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { GET_COLLETERAL_LIST_SUCCESS } from '../redux/action_constants'
import {APP_API_URL, colleteralsList} from '../constants/global'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

beforeEach(() => {
    fetchMock.restore();
})
const colleteralSecurities = [{
	"id": 1,
	"loan_id": 1,
	"type": "Machinery",
	"pledge_signed_on": "2022-01-07 12:38:55",
	"document_received": 1,
	"document_received_by": 2,
	"document_received_on": "2022-01-07 12:38:55",
	"current_value": 2000000,
	"future_value": 1000000,
	"status": 1,
	"pledge_copy_uploaded": 0,
	"pledge_copy_uploaded_on": "2022-01-07 12:38:55"
}, {
	"id": 2,
	"loan_id": 1,
	"type": "Property Documents",
	"pledge_signed_on": "2022-01-07 12:38:55",
	"document_received": 1,
	"document_received_by": 2,
	"document_received_on": "2022-01-07 12:38:55",
	"current_value": 5000000,
	"future_value": 12500000,
	"status": 1,
	"pledge_copy_uploaded": 0,
	"pledge_copy_uploaded_on": "2022-01-07 12:38:55"
}, {
	"id": 3,
	"loan_id": 1,
	"type": "Mutual Funds Shares",
	"pledge_signed_on": "2022-01-07 12:38:55",
	"document_received": 1,
	"document_received_by": 2,
	"document_received_on": "2022-01-07 12:38:55",
	"current_value": 2000000,
	"future_value": 4000000,
	"status": 1,
	"pledge_copy_uploaded": 0,
	"pledge_copy_uploaded_on": "2022-01-07 12:38:55"
}];

describe("Checking colleteralsReducer", () => {
    
    test("should return default state", () =>{
        const newState = colleteralsReducer(undefined, {});
        expect(newState.data).toEqual([]);
    });

  
   
    test('should create GET_COLLETERAL_LIST_SUCCESS when searching', () => {
        fetchMock.getOnce(APP_API_URL+colleteralsList+'2', colleteralSecurities)
    
        const expectedActions = [
            {
                type : GET_COLLETERAL_LIST_SUCCESS,
                payload: colleteralSecurities 
            }
        ]
        const store = mockStore({ search: {
          result: {}
        }})
    
        return store.dispatch(actions.getColleterals(2))
          .then((data) => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
          })
    
      })

     
 
    

})
