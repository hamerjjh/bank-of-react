import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'

class AccountBalance extends Component {
state= {
  redirectToHome: false
}
  saveSomething =() => {
    setTimeout(()  => {
      this.setState({redirectToHome: true})
    }, 1500)
   }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />
    }

    return (
        <div>
          Balance: {this.props.accountBalance}
          <br />
          <button onClick={this.saveSomething}>Redirect Button</button>
          <Link to="/">Home</Link>
        </div>
    );
  }
}

export default AccountBalance;