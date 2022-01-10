import React, { Dispatch, Component } from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import * as actions from '../redux/action_creators';
import {StoreI} from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import { BudgetDispatchI, BudgetListI } from '../redux/types/budgetTypes';
import {getBudget} from '../redux/action_creators/budget'
import { GET_BUDGET_LIST } from '../redux/action_constants';
import {bindActionCreators} from 'redux'


interface propsI {
  budget: BudgetListI;
  actions: any;
}

const columnDefs = [
  {
    headerName: "Type",
    field: "type",
    filter:true,
    sortable:true
  },
  {
    headerName: "Subtypes",
    field: "subtype"
  },
  {
    headerName: "Budget (Rs)",
    field: "lumsum"
  }
];




class Budget extends Component<propsI, any>{
  
  state = {}

    constructor(props:propsI){
      super(props)
     
      
    }

    componentDidMount(){
      this.props.actions(getBudget());   
    }
  
    
   render(){   
    return (
       
        <div className="tab-content" id="v-pills-tabContent" style={{"width": "100%"}}>
            <div className="tab-pane fade show active" id="v-pills-basic" role="tabpanel" aria-labelledby="v-pills-basic-tab">
                <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
                <h5><i className="fas fa-user-friends" aria-hidden="true"></i>Budget</h5>
            
                    <AgGridReact
                       rowData={this.props.budget && this.props.budget.data}
                       columnDefs={columnDefs}>
                       <AgGridColumn field="type" checkboxSelection={true}></AgGridColumn>
                       <AgGridColumn field="subtype"></AgGridColumn>
                       <AgGridColumn field="lumsum"></AgGridColumn>
                   
                   </AgGridReact>
                </div>
            </div>
         </div>
    )
   }
} 

const mapStatesToProps = (state:StoreI) => {
  return{
    budget:state.budget
  }
}


function mapDispatchToProps(dispatch: Dispatch<BudgetDispatchI>) {
  return{
    actions:dispatch
  }
}
export default connect(mapStatesToProps, mapDispatchToProps)(Budget)
