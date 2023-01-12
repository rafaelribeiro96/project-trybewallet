import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, fetchAddExpense } from '../redux/actions';
import './WalletForm.css';

class WalletForm extends Component {
  state = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrency());
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchAddExpense(this.state));
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  };

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form className="form-wallet-form" onSubmit={ this.onSubmitForm }>

          <label htmlFor="value-input" className="label-value">
            Valor:
            <input
              className="form-value"
              type="number"
              name="value"
              id="value-input"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleInputChange }
            />
          </label>

          <label htmlFor="description-input" className="label-description">
            Descrição:
            <input
              className="form-description"
              type="text"
              name="description"
              id="description-input"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleInputChange }
            />
          </label>

          <label htmlFor="currency-input" className="label-select-currency">
            Moeda:
            <select
              className="select-currency"
              name="currency"
              id="currency-input"
              value={ currency }
              data-testid="currency-input"
              onChange={ this.handleInputChange }
            >
              { currencies.map((item) => (
                <option key={ item } value={ item }>{ item }</option>
              ))}
            </select>
          </label>

          <select
            className="select-method"
            name="method"
            id="method-input"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>

          </select>

          <select
            className="select-tag"
            name="tag"
            id="tag-input"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>

          <button className="button-add-despesa" type="submit">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
