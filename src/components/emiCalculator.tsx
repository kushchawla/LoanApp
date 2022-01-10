import { render } from '@testing-library/react';
import React, {Component, ReactHTML} from 'react';
import '../App.css'


type EMICalculatorI = {
    amount: number,
    interest: number,
    years: number,
    error: string,
    emi: number,
    totalPayment: number,
    totalInterest: number,
    isResult: boolean
}

class EMICalculator extends React.Component<{}, EMICalculatorI>{
    
    state:EMICalculatorI = {
        amount: 0,
        interest: 0,
        years: 0,
        error:'',
        emi:0,
        totalPayment:0,
        totalInterest:0,
        isResult:false
    }
    constructor(props:any){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.calculateResults = this.calculateResults.bind(this);
        this.handleSubmitValues = this.handleSubmitValues.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    clearForm = ():void => {
        this.setState({
            amount: 0,
            interest: 0,
            years: 0,
            error:'',
            emi:0,
            totalPayment:0,
            totalInterest:0,
            isResult:false
        })
    }

    handleInputChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if(e.target.value && parseInt(e.target.value) > 0){
            this.setState({...this.state, [e.target.name]:parseInt(e.target.value)});
        }
    }

    handleSubmitValues = (e:React.SyntheticEvent<HTMLFormElement, Event>):void => {
        e.preventDefault();
        if(this.state.amount > 0 && this.state.interest > 0 && this.state.years > 0){
            this.calculateResults();
        }else{
            this.setState({...this.state, error:'Please fill all the fields'});
        }
       
      };

    calculateResults = ():void => {
        const { amount, interest, years } = this.state;
        const userAmount = Number(amount);
        const calculatedInterest = Number(interest) / 100 / 12;
        const calculatedPayments = Number(years) * 12;
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (userAmount * x * calculatedInterest) / (x - 1);
     
        if (isFinite(monthly)) {
          const monthlyPaymentCalculated = monthly.toFixed(2);
          const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
          const totalInterestCalculated = (monthly * calculatedPayments - userAmount).toFixed(2);
     
          // Set up results to the state to be displayed to the user
          this.setState({
              ...this.state,
                emi: parseInt(monthlyPaymentCalculated),
                totalPayment: parseInt(totalPaymentCalculated),
                totalInterest: parseInt(totalInterestCalculated),
                isResult: true,
                error:''
          })
        }
        return;
      };

    render(): React.ReactElement{
        return (<div>
          
            <form onSubmit={this.handleSubmitValues} className="form">
            <h2>EMI Calculator</h2>
                <div>
                    {this.state.error ? (<div className="text-danger">{this.state.error}</div>): ""}
                    <div className="form-items">
                    <label className="label">Amount:</label>
                    <input
                        type='text'
                        name='amount'
                        placeholder='Loan amount'
                       value={this.state.amount}
                        onChange={this.handleInputChange}
                      
                    />
                    </div>
                    <div className="form-items">
                    <label className="label">Interest:</label>
                    <input
                        type='text'
                        name='interest'
                        placeholder='Interest'
                       value={this.state.interest}
                        onChange={this.handleInputChange}
                      
                    />
                    </div>
                    <div className="form-items">
                    <label className="label">Years:</label>
                    <input
                        type='text'
                        name='years'
                        placeholder='Years'
                       value={this.state.years}
                        onChange={this.handleInputChange}
                      
                    />
                    </div>


                    <div className="form-items">
                    
                    <button
                        type='submit'
                        className="button"
                        onClick={this.calculateResults}
                      
                    >Submit</button>

                    <button
                        type='button'
                        className="button"
                        onClick={this.clearForm}
                      
                    >Reset</button>
                    </div>

                    {this.state.isResult ? (<div> 
                        <div><label className="label">EMI: Rs. </label>{this.state.emi}</div>
                        <div><label className="label">Total Payment: Rs. </label>{this.state.totalPayment}</div>
                        <div><label className="label">Total Interest: Rs. </label>{this.state.totalInterest}</div>
                    </div>) : ''}
                </div>
            </form>
                    
        </div>)
    }
} 

export default EMICalculator;