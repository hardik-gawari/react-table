import React, { Component } from 'react'
import './style.css'
export class BankDetailsTableRow extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             bankRecord:this.props.bankRecord
        }
    }
    
    render() {
        return (
                <tr className="border_bottom" >
                    <td>{this.state.bankRecord.id}</td>
                    <td>{this.state.bankRecord.account_no}</td>
                    <td>{this.state.bankRecord.date.toLocaleString()}</td>
                    <td>{this.state.bankRecord.transaction_details}</td>
                    <td>{this.state.bankRecord.value_date.toLocaleString()}</td>
                    <td>{this.state.bankRecord.withdrawl_amount}</td>
                    <td>{this.state.bankRecord.deposit_amount}</td>
                    <td>{this.state.bankRecord.balance_amount}</td>
                </tr> 
        )
    }
}

export default BankDetailsTableRow
