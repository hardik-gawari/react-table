import React from 'react';
import logo from './logo.svg';
import './App.css';

import { data } from "./data/bank_details";
import BankDetailsTable from "./component/BankDetailsTable/BankDetailsTable"


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data:[]     
    }
  }

  componentWillMount(){
    let id=1;
    let data1=data.map(item=>{
      let new_item = {};
      new_item.id=id;
      id=id+1;
      new_item.account_no=item["Account No"]
      new_item.date=new Date(item["Date"])
      new_item.transaction_details=item["Transaction Details"]
      new_item.value_date=new Date(item["Value Date"])
      new_item.withdrawl_amount=item["Withdrawal AMT"]!="" ? parseFloat(item["Withdrawal AMT"].replace(/,/g, '')) : 0
      new_item.deposit_amount=item["Deposit AMT"]!="" ? parseFloat(item["Deposit AMT"].replace(/,/g, '')) : 0
      new_item.balance_amount=item["Balance AMT"]!="" ? parseFloat(item["Balance AMT"].replace(/,/g, '')) : 0
      return new_item
    })

    console.log(data1)
    this.setState({
      data:data1
      }
    )
  }

  render(){
    return (
      <div className="App">
      <BankDetailsTable bankDetails={this.state.data}></BankDetailsTable>
      </div>
    )
  }


}

export default App;
