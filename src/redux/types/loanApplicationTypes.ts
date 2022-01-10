import {FETCH_LOADING, FETCH_FAILURE, GET_APPROVED_LOANS_SUCCESS, GET_LOAN_DETAIL} from '../action_constants'
export type ApplicationI = {
    "application_id":number,
    "required_amount":number,
    "emi_value":number,
    "interest":number,
    "tenure":number,
    "purpose":string,
    "status":"Pending" | "Approved" | "Rejected",
    "existing_loans_amount":number,
    "existing_loans_dues":number,
    "existing_loans_monthly_emi":number,
    "cibil_score":number,
    "applied_on":Date
}

export type ApprovedLoansI = {
	user_id: number,
    firstname: string,
    lastname: string,
    family_members: number,
    mobile_number: number,
    pincode: number,
    city: string,
    job_type: string,
    monthly_household_income: string,
    age: string,
    date_of_birth: string,
    reference_1_name: string,
    reference_1_adhar_num: string,
    reference_1_relation: string,
    reference_1_contact_number: number,
    reference_2_name: string,
    reference_2_adhar_num: string,
    reference_2_relation: string,
    reference_2_contact_number: number,    
    created_on: string,
    updated_on: string,
    created_by: number,
    application_id: number,
    required_amount: number,
    emi_value: number,
    interest: number,
    tenure: number,
    purpose: string,
    status: string,
    existing_loans_amount: number,
    existing_loans_dues: number,
    existing_loans_monthly_emi: number,
    cibil_score: number,
    applied_on: string,
    applied_by: number
}
export type loanReducerI = LoansI | LoanDetailI;


export type LoanDetailI = {
    loan_id: number,
    application_id: number,
    approving_officer: number,
    agreed_amount: number,
    agreement_signature: string,
    witness_1_signature: string,
    witness_2_signature: string,
    agreed_tenure: number,
    agreed_rate_of_interest: number,
    agreed_emi: number,
    agreed_date: string,
    emi_start_date: string,
    emi_agreed_date: string,
    loan_paid: number,
    loan_paid_on: string,
    updated_on: string,
    required_amount: number,
    emi_value: number,
    interest: number,
    tenure: number,
    purpose: string,
    status: string,
    existing_loans_amount: number,
    existing_loans_dues: number,
    existing_loans_monthly_emi: number,
    cibil_score: number,
    applied_on: string,
    applied_by: number,
    full_name: string,
    officer_name: string,
    firstname: string,
    lastname: string,
    family_members: number,
    mobile_number: number,
    pincode: number,
    city: string,
    job_type: string,
    job_detail: string,
    monthly_household_income: string,
    age: string,
    date_of_birth: string,
    reference_1_name: string,
    reference_1_adhar_num: string,
    reference_1_relation: string,
    reference_1_contact_number: number,
    reference_2_name: string,
    reference_2_adhar_num: string,
    reference_2_relation: string,
    reference_2_contact_number: number
}


export type LoansI = {
    data?: ApplicationI[],
    loading:boolean,
    error:string
}
export type LoansDetailI = {
    data?: LoanDetailI[],
    loading:boolean,
    error:string
}

export interface FetchRequestI{
    type: typeof FETCH_LOADING
}

export interface FetchApplicationsSuccessI{
    type:typeof GET_APPROVED_LOANS_SUCCESS,
    payload?:ApplicationI[]
}

export interface FetchLoanDetailSuccessI{
    type:typeof GET_LOAN_DETAIL,
    payload?:LoanDetailI[],
    error:string
}

export  interface FetchApplicationsFailureI{
    type:typeof FETCH_FAILURE,
    payload: string
}

export type DispatchI = FetchRequestI | FetchApplicationsFailureI | FetchApplicationsSuccessI | FetchLoanDetailSuccessI;

