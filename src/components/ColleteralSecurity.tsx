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
import { ColleteralI, ColleteralListI } from '../redux/types/colleteralTypes';
import { useParams } from 'react-router';

type propsI = {
  id?:string
}
const ColleteralSecurity = (props:propsI) => {
   
    const columnDefs = [
        {
          headerName: "Type",
          field: "type",
          filter:true,
          sortable:true
        },
        {
          headerName: "Document Submitted?",
          field: "document_received",
          width:100
        },
        {
          headerName: "Current Value",
          field: "current_value"
        },
        {
          headerName: "Expected Future Value",
          field: "future_value"
        },
        {
          headerName: "Status",
          field: "status",
          width:100,
        },
        {
          headerName: "Pledge Signed On",
          field: "pledge_signed_on"
        }
      ];
      
    const params = useParams();
    const dispatch = useDispatch();
    let paramsId = params?.id;
    if(props.id != undefined){
      paramsId = props.id;
    }
    
    const state = useSelector<StoreI, StoreI["colleterals"]>((state) => state.colleterals);
  console.log('colleterals', state)
   
    useEffect(() => {
      dispatch(actions.getColleterals(paramsId));      
    }, [paramsId]);
      
    return (
       
        <div className="tab-content" id="v-pills-tabContent" style={{"width": "100%"}}>
            <div className="tab-pane fade show active" id="v-pills-basic" role="tabpanel" aria-labelledby="v-pills-basic-tab">
                <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
                <h5><i className="fas fa-user-friends" aria-hidden="true"></i> Colleteral Securities</h5>
            
                    <AgGridReact
                       rowData={state && state.data}
                       columnDefs={columnDefs}>
                       <AgGridColumn field="type" checkboxSelection={true}></AgGridColumn>
                       <AgGridColumn field="document_received"></AgGridColumn>
                       <AgGridColumn field="current_value"></AgGridColumn>
                       <AgGridColumn field="future_value"></AgGridColumn>
                       <AgGridColumn field="status"></AgGridColumn>
                       <AgGridColumn field="pledge_signed_on"></AgGridColumn>
                   
                   </AgGridReact>
                </div>
            </div>
         </div>
    )
}

export default ColleteralSecurity
