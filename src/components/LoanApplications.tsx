import React, { Dispatch } from 'react'
import { useEffect, useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import {APP_API_URL, LoanAPP} from '../constants/global';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import LeftMenu from '../layout/leftMenu';
import * as actions from '../redux/action_creators';
import {StoreI} from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {LoansI} from '../redux/types/loanApplicationTypes';


const LoanApplications = () => {
   
    const columnDefs = [
        {
          headerName: "Applicant Name",
          field: "full_name",
          width: 150,
          filter:true,
          sortable:true
        },
        {
          headerName: "Applied on",
          field: "applied_on"
        },
        {
          headerName: "Emi",
          field: "emi_value",
          width: 100
        },
        {
          headerName: "Purpose",
          field: "purpose",
          width: 120
        },
        {
          headerName: "Required Amount",
          field: "required_amount"
        },
        {
          headerName: "Status",
          field: "status",
          width: 110
        },
        {
          headerName: "Tenure",
          field: "tenure",
          width: 100
        }
      ];
      
     
    const dispatch = useDispatch();
    const state = useSelector<StoreI, StoreI["loan"]>((state) => state.loan);
  
   
    useEffect(() => {
      dispatch(actions.fetchLoan());      
    }, []);
      
    console.log('loans', state)
    return (
       <div className="tab-content" id="v-pills-tabContent" style={{"width": "100%"}}>
          <div className="tab-pane fade show active" id="v-pills-basic" role="tabpanel" aria-labelledby="v-pills-basic-tab">
            <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
              <h2 data-testid="title">Loan Applications</h2>
                                            
               <AgGridReact
               rowData={state && state.data}
               columnDefs={columnDefs}
               rowSelection="multiple"
               onRowClicked={(e) => {
                   console.log("row selected", e.rowIndex, e.type, e.node.data);
                
                    if(e.node.data.status == 'Approved'){
                      window.open("/loan-application-detail/"+e.node.data.application_id)
                    }
                    }
                }
                data-testid="loanGrid"
                >
               <AgGridColumn field="full_name" checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="applied_on"></AgGridColumn>
               <AgGridColumn field="emi_value"></AgGridColumn>
               <AgGridColumn field="purpose"></AgGridColumn>
               <AgGridColumn field="required_amount"></AgGridColumn>
               <AgGridColumn field="status"></AgGridColumn>
               <AgGridColumn field="tenure"></AgGridColumn>
           
           </AgGridReact>
           </div>
          </div>
        </div>                            
    )
}

export default LoanApplications
