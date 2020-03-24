import React, { Component } from 'react'
import { BankDetailsTableHead } from './BankDetailsTableHead';
import { BankDetailsTableRow } from './BankDetailsTableRow';
import './style.css';
import Header from '../Header/Header';
export default class BankDetailsTable extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             bankDetailsSaved: this.props.bankDetails,
             bankDetails : this.props.bankDetails,
             displayBankDetails: this.props.bankDetails.slice(0,10),
             pageNo: 1,
             pageSize:10,
             sortBy: "account_no"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    sortBy(key){
        let newSortedBankDetails = this.state.bankDetails;
        if(key=="date"){
            newSortedBankDetails = this.state.bankDetails.sort((a,b)=>a.date-b.date);
        }else if(key=="withdrawl_amount"){
         newSortedBankDetails = this.state.bankDetails.sort((a,b)=>b.withdrawl_amount-a.withdrawl_amount);
        }else if(key=="deposit_amount"){
            newSortedBankDetails = this.state.bankDetails.sort((a,b)=>b.deposit_amount-a.deposit_amount);
            
        }else if(key=="balance_amount"){
            newSortedBankDetails = this.state.bankDetails.sort((a,b)=>b.balance_amount-a.balance_amount);
        }else if(key=="account_no"){
            newSortedBankDetails = this.state.bankDetails.sort((a,b)=>a.account_no-b.account_no);
            
        }
        this.setState({
             bankDetails : newSortedBankDetails,
             displayBankDetails: newSortedBankDetails.slice(0,10)
            })
        }

    search(e){
        let newSortedBankDetails = this.state.bankDetails.filter((item)=>{
            return item.transaction_details.toLowerCase().includes(e.target.value.toLowerCase())
        });
        if(e.target.value==""){
            newSortedBankDetails=this.state.bankDetailsSaved;
        }
        this.setState({
            bankDetails : newSortedBankDetails,
            displayBankDetails: newSortedBankDetails.slice(0,10)
           })
    }

    nextPage(){
        this.setState((prevState)=>{
            console.log(prevState)
            return{
            displayBankDetails:prevState.bankDetails.slice(((prevState.pageNo+1)*prevState.pageSize)-10,((prevState.pageNo+1)*prevState.pageSize)-1),
            pageNo:prevState.pageNo+1
            }
        })

    }

    prevPage(){
        this.setState((prevState)=>{
            console.log(prevState)
            return{
            displayBankDetails:prevState.bankDetails.slice(((prevState.pageNo-1)*prevState.pageSize)-10,((prevState.pageNo-1)*prevState.pageSize)-1),
            pageNo:prevState.pageNo-1
            }
        })

    }

    handleChange(e){
        this.setState({sortBy:e.target.value});
        this.sortBy(e.target.value)
      }
    
    render() {
        return (
            <div className="container">
                <Header></Header>
                <br/>
                Search Transaction: <input onChange={this.search}></input>
                <br/>
                <br/>
                <select 
                value={this.state.sortBy} 
                onChange={this.handleChange}>
                <option value="account_no">Account Number</option>
                <option value="date">Date</option>
                <option value="withdrawl_amount">WithDrawl Amount</option>
                <option value="deposit_amount">Deposit Amount</option>
                <option value="balance_amount">Balance</option>
                </select>
                <table className="table-styles">
                    <BankDetailsTableHead></BankDetailsTableHead>
                    <tbody>
                    {
                        this.state.displayBankDetails.map((item)=>
                             <BankDetailsTableRow bankRecord={item} key={item.id}></BankDetailsTableRow>
                    )
                    }
                    </tbody>
                </table>
                { this.state.pageNo>1 ? 
                    <button onClick={()=>this.prevPage()}>Prev Page</button>
                    : null }
                <button onClick={()=>this.nextPage()}>Next Page</button>
            </div>
        )
    }
}

