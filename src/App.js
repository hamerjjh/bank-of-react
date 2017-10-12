import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import AccountBalance from './components/AccountBalance'
import Debits from './components/Debits'
import Credits from './components/Credits'
import axios from "axios";


class App extends Component {

state= {
  user: {
    userName: "Bob",
    memberSince: 1950
  },
  debits: [],
  credits: [],

  accountBalance: ''
}
getDebits = () => {
  axios.get("http://localhost:4000/debits")
      .then((response) => {
        console.log(response)
          const debits = response.data;
          this.setState({ debits });
      })
      .catch((error) => {
          console.error("Error: ", error);
      });
}
getCredits = () => {
axios.get("http://localhost:4000/credits")
.then((response) => {
  console.log(response)
  const credits = response.data;
  this.setState({ credits });
})
.catch((error) => {
  console.error("Error: ", error);
});
}
_calculateAccountBalance = () => {
  const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
    return totalCredits + credit.amount;
  }, 0);

  const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
    return totalDebits + debit.amount;
  }, 0);

  return totalCredits - totalDebits;
};

componentWillMount() {
  this.getDebits()
  this.getCredits()
}

  render() {
    const accountBalance = this._calculateAccountBalance();
    
    const HomeComponent = () => (<Home accountBalance={accountBalance}/>);

    const UserProfileWrapper = () => {
      return (<UserProfile user={this.state.user} />)
    }

    const AccountBalanceWrapper = () => {
      return (<AccountBalance accountBalance={accountBalance} />)
    }

    const DebitsWrapper = () => {
      return (<Debits debits={this.state.debits} accountBalance={accountBalance} />)
    }
    const CreditsWrapper = () => {
      return (<Credits credits={this.state.credits} accountBalance={accountBalance}/>)
    }

   

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper} />
          <Route exact path="/user" render={UserProfileWrapper} />
          <Route exact path="/debits" render={DebitsWrapper} />
          <Route exact path="/credits" render={CreditsWrapper} />
        </Switch>
        </Router>
    );
  }
}

export default App;
