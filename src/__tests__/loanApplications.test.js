import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoanApplications from '../components/LoanApplications';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import {fetchLoan} from '../redux/action_creators'
import {APP_API_URL, LoanAPP} from '../constants/global'

import {FETCH_FAILURE, FETCH_LOADING, GET_APPROVED_LOANS_SUCCESS} from '../redux/action_constants'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { GET_COLLETERAL_LIST_SUCCESS } from '../redux/action_constants'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const loanApplication = [{
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


function componentWithRedux(component, store ){

    return {
    ...render(<Provider store={store}>{component}</Provider>)
    }
}


const loans = [{
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

beforeEach(() => {
    fetchMock.restore();
})

afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  test("Initial Screen should have a title", () =>{
    const loanAppComponent = componentWithRedux(<LoanApplications />, store)
    const title = loanAppComponent.getByTestId('title');
    expect(title).toHaveTextContent(/Loan Application/);
})


  test('should able to make request and pull out list of loans', () => {
    fetchMock.getOnce(APP_API_URL + LoanAPP, loans)

    const expectedActions = [
      {
        type:FETCH_LOADING
      },
      {
        type:GET_APPROVED_LOANS_SUCCESS,
        payload:loans
    }
    ]
    const store = mockStore({ 
      data:[],
      error:'',
      loading:false
    })

    return store.dispatch(fetchLoan())
      .then((data) => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })

  })

  