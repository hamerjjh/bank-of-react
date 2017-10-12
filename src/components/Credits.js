import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance'

class Credits extends Component {
    render() {
        
        const creditlist = this.props.credits.map((credit) => 
        (
         <div key={credit.id}>
             <br />
         <div>{credit.description}</div>
         <div>$ {credit.amount}</div>
         <div>date: {credit.date}</div>
         </div>
        ))
      return (
          <div>
            <h1>Credits</h1>
            Account Balance: {this.props.accountBalance}
            
            {creditlist}

            <Link to="/">Home</Link>
          </div>
      );
    }
  }



export default Credits;