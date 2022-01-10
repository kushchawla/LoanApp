import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import {APP_API_URL, LoanAPP, LoanDetail} from '../constants/global';
import LeftMenu from '../layout/leftMenu';
import {useSelector, useDispatch} from 'react-redux';
import {fetchLoanDetail} from '../redux/action_creators'
import {DispatchI, LoansDetailI, LoansI} from '../redux/types/loanApplicationTypes';
import {StoreI} from '../redux/store'
import ColleteralSecurity from './ColleteralSecurity';

function formatInputBoxToRange(n:string,s:string):void{
    console.log(n,s)
}

export default function DetailApplication() {

    const params = useParams();
    const dispatch = useDispatch();
    const loanDetail = useSelector<StoreI, StoreI["loanDetail"]>((state) => state.loanDetail)
    useEffect(()=> {
        dispatch(fetchLoanDetail(params.id)) 
     }, []);

    const loanData = loanDetail.data;

        return (
        <div>      
          {!params.id  ? window.open('/') :(
          <div className="tab-content" id="v-pills-tabContent" style={{"width": "100%"}}>
                <div className="tab-pane fade show active" id="v-pills-basic" role="tabpanel" aria-labelledby="v-pills-basic-tab">
                  <div>
                      <fieldset className="wizard-fieldset show">
                          <div className="uppar-section">
                              <div className="fields-section">
                              <div className="row">
                                  <div className="col-lg-8">
                                      <h5><i className="fas fa-id-card"></i> Basic Information</h5>
                                      <div className="form-row">
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label htmlFor="">First Name <sup>*</sup></label>
                                                  <input type="text" className="form-control" defaultValue={loanData && loanData[0]?.firstname} id="firstname" placeholder="" />
                                              </div>
                                          </div>
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label htmlFor="">Last Name <sup>*</sup></label>
                                                  <input type="text" className="form-control" defaultValue={loanData && loanData[0]?.lastname}  id="lastname" placeholder="" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-row">
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label>Family Members <sup>*</sup></label>
                                                  <select className="form-control select2 select2-hidden-accessible" style={{"width": "100%"}} data-select2-id="1" aria-hidden="true">
                                                      <option value="">&nbsp;</option>
                                                      <option value="1">1</option>
                                                      <option value="2">2</option>
                                                      <option value="3">3</option>
                                                      <option value="4">4</option>
                                                      <option value="5" selected>5</option>
                                                      <option value="6">6</option>
                                                      <option value="7">7</option>
                                                      <option value="8">8</option>
                                                      <option value="9">9</option>
                                                      <option value="10">10</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label>Purpose of Loan <sup>*</sup></label>
                                                  <select className="form-control select2 select2-hidden-accessible" style={{"width": "100%"}} data-select2-id="1" aria-hidden="true">
                                                      <option value="">&nbsp;</option>
                                                      <option value="home-construction">Home Construction</option>
                                                      <option value="home-renovation" selected>Home Renovation</option>
                                                      <option value="other">Others</option>
                                                  </select>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-row">
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label htmlFor="">Mobile Number <sup>*</sup></label>
                                                  <input type="number" className="form-control"  defaultValue={loanData && loanData[0]?.mobile_number} id="firstname" placeholder="" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-row">
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label htmlFor="">Pin Code <sup>*</sup></label>
                                                  <input type="number" defaultValue={loanData && loanData[0]?.pincode} className="form-control" id="lastname" placeholder="" />
                                              </div>
                                          </div>
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label>City <sup>*</sup></label>
                                                  <select className="form-control select2 select2-hidden-accessible" style={{"width": "100%"}} data-select2-id="1" aria-hidden="true">
                                                      <option value="">&nbsp;</option>
                                                      <option value="new-delhi">New Delhi</option>
                                                      <option value="agra">Agra</option>
                                                      <option value="ajmer">Ajmer</option>
                                                  </select>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="form-row">
                                          <div className="col-lg-4 col-md-6 col-sm-6 mobile-padding focus-input">
                                              <div className="form-group">
                                                  <label>Nearest Branch</label>
                                                  <select className="form-control select2 select2-hidden-accessible" style={{"width": "100%"}} data-select2-id="1" aria-hidden="true">
                                                      <option value="">&nbsp;</option>
                                                      <option value="home-construction">Home Construction</option>
                                                      <option value="Dropdown1">Dropdown1</option>
                                                      <option value="Dropdown2">Dropdown2</option>
                                                  </select>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-4">
                                      <p>Please use the slider to choose amount or enter in the given field.</p>

                                      <div className="row margin">
                                          <div className="col-lg-11 col-sm-12 box2-final">
                                              <label htmlFor="slider">Loan Required <sup>*</sup></label>
                                              <input defaultValue={loanData && loanData[0]?.required_amount}  id="range_5" type="text" name="range_5" />

                                              <div className="slider-amount-new">
                                                  <small>Rs.</small>
                                                  <input type="text"
                                                         value={loanData && loanData[0]?.required_amount}
                                                         className="form-control width-dynamic"
                                                         id="range_5_input"
                                                         placeholder="0" />
                                              </div>
                                          </div>
                                          <div className="col-lg-11 col-sm-12 section-padding box2-final" style={{"marginTop": "20px"}}>
                                              <label htmlFor="slider">Current EMI (Monthly)</label>
                                              <input  id="range_6" type="text" name="range_6" defaultValue={loanData && loanData[0]?.emi_value}/>
                                              <div className="slider-amount-new">
                                                  <small>Rs.</small>
                                                  <input type="text"
                                                         value={loanData && loanData[0]?.emi_value}
                                                         className="form-control width-dynamic"
                                                         placeholder="0"
                                                         id="range_6_input" />
                                              </div>
                                          </div>
                                          <div className="col-lg-11 col-sm-12 section-padding box2-final" style={{"marginTop": "20px"}}>
                                              <label htmlFor="slider">Monthly Household Income <sup>*</sup></label>
                                              <input id="range_4" defaultValue={loanData && loanData[0]?.monthly_household_income} type="text" name="range_4" />
                                              <div className="slider-amount-new">
                                                  <small>Rs.</small>
                                                  <input type="text"
                                                         value={loanData && loanData[0]?.monthly_household_income}
                                                         className="form-control width-dynamic"
                                                         id="range_4_input"
                                                         placeholder="0" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <hr />
                              <div className="row">
                                  <div className="col-lg-12">
                                      <h5><i className="fas fa-user-friends" aria-hidden="true"></i> References</h5>
                                      <div className="reference-box">
                                          <div className="form-row">
                                              <div className="col-lg-3 col-md-4 col-sm-6 mobile-padding">
                                                  <label htmlFor="reference-name">Name <sup>*</sup></label>
                                                  <input type="text" className="form-control wizard-required" id="reference-name" defaultValue={loanData && loanData[0]?.reference_1_name}/>
                                              </div>
                                              <div className="col-lg-3 col-md-4 col-sm-6 mobile-padding">
                                                  <label htmlFor="relation-with-applicant">Relation with applicant <sup>*</sup></label>
                                                  <select className="form-control" name="" id="relation-with-applicant" style={{"display": "block"}}>
                                                      <option value="">&nbsp;</option>
                                                      <option value="father">Father</option>
                                                      <option value="mother">Mother</option>
                                                      <option value="husband">Husband</option>
                                                      <option value="other">Other</option>
                                                  </select>
                                              </div>
                                              <div className="col-lg-3 col-md-4 col-sm-6 mobile-padding">
                                                  <label htmlFor="contact-number">Contact number <sup>*</sup></label>
                                                  <input type="text" className="form-control wizard-required" id="contact-number" defaultValue={loanData && loanData[0]?.reference_1_contact_number}/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="reference-box">
                                          <div className="form-row">
                                              <div className="col-lg-3 col-md-4 col-sm-6 mobile-padding">
                                                  <label htmlFor="reference-name">Name <sup>*</sup></label>
                                                  <input type="text" className="form-control wizard-required" id="reference-name" defaultValue={loanData && loanData[0]?.reference_2_name}/>
                                              </div>
                                              <div className="col-lg-3 col-md-4 col-sm-6 mobile-padding">
                                                  <label htmlFor="relation-with-applicant">Relation with applicant <sup>*</sup></label>
                                                  <select className="form-control" name="" id="relation-with-applicant" style={{"display": "block"}}>
                                                      <option value="">&nbsp;</option>
                                                      <option value="father">Father</option>
                                                      <option value="mother">Mother</option>
                                                      <option value="husband">Husband</option>
                                                      <option value="other">Other</option>
                                                  </select>
                                              </div>
                                              <div className="col-lg-3 col-md-4 col-sm-6 mobile-padding">
                                                  <label htmlFor="contact-number">Contact number <sup>*</sup></label>
                                                  <input type="text" className="form-control wizard-required" id="contact-number" defaultValue={loanData && loanData[0]?.reference_2_contact_number}/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  

                              </div>
                              <hr/>
                              <div className="row">
                                  <div className="col-lg-12">
                                  <ColleteralSecurity id={loanData && loanData[0]?.loan_id ? loanData[0].loan_id.toString() : '-1'}/>
                                        
                                    </div>
                                </div>
                              </div>
                          </div>
                      </fieldset>
                  </div>
                                                          
                </div>
           </div>
              )}
        </div>
        )

}
