import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Debits extends Component {
    render() {
        const debitlist = this.props.debits.map((debit) => 
            (
             <div key={debit.id}>
                 <br />
             <div>{debit.description}</div>
             <div>$ {debit.amount}</div>
             <div>date: {debit.date}</div>
             <br />
             </div>
            ))
         
      return (
          <div>
            <h1>Debits</h1>
               Account Balance: {this.props.accountBalance}
                {debitlist}
       
            <Link to="/">Home</Link>
          </div>
      );
    }
  }



export default Debits;