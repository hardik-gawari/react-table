import React, { Component } from 'react'
import './style.css'
export class BankDetailsTableHead extends Component {
    render() {
        return (
            <thead>
                <tr  className="border_bottom">
                    <th>ID</th>
                    <th>Account No</th>
                    <th>Date</th>
                    <th >Transaction Details</th>
                    <th >Value</th>
                    <th>Withdrawl Amount</th>
                    <th>Deposit Amount</th>
                    <th>Balance Amount</th>
                </tr> 
                </thead>
        )
    }
}

export default BankDetailsTableHead
