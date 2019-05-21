import React from 'react';
import { connect } from 'react-redux';

const SpendTracker = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      purchase: event.target.purchase.value,
      amount: event.target.amount.value
    }
    props.addTransaction(newTransaction);
    event.target.reset();
  }

  return(
    <div>
      <h1>Spending Tracker</h1>
      <h3>Enter your Spending</h3>
      <form onSubmit={handleSubmit} id='spending-tracker' autocomplete='off'>
        <label htmlFor='type'>Transaction Type</label>
        <input type='text' name='purchase' id='purchase' />
        <label htmlFor='amount'>Amount</label>
        <input type='number' name='amount' id='amount' />
        <input type='submit' value='Post Transaction' />
      </form>
      <ul id='transaction-list'>
        {props.transactions.map((transaction) => {
          return (
            <li>{transaction.purchase}: £{transaction.amount}</li>
          )
        })}
      </ul>
      <div>Total: £{props.transactions.reduce((accumulator, currentElement) => {
          return accumulator + parseInt(currentElement.amount);
        }, 0)}</div>
      <button onClick={props.clearTransaction} id='reset'>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    transactions: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (transaction) => {
      dispatch({ type: 'ADD_TRANSACTION', transaction: transaction })
    },
    clearTransaction: () => {
      dispatch({ type: 'CLEAR_TRANSACTION' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendTracker)
