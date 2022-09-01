import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  expensesTotal = (expenses) => (
    expenses.reduce((acc, curr) => {
      const { value, currency, exchangeRates } = curr;
      return acc + (value * exchangeRates[currency].ask);
    }, 0)
  );

  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ this.expensesTotal(expenses).toFixed(2) }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Header);
