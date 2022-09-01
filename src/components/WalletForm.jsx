import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    currency: '',
    method: '',
    tag: '',
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

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form action="">

          <label htmlFor="value-input">
            Valor:
            <input
              type="number"
              name="value"
              id="value-input"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <input
              type="text"
              name="description"
              id="description-input"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleInputChange }
            />
          </label>

          <label htmlFor="currency-input">
            Moeda:
            <select
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
            name="method"
            id=""
            value={ method }
            data-testid="method-input"
            onChange={ this.handleInputChange }
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>

          </select>

          <select
            name=""
            id="tag-input"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleInputChange }
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>

          </select>
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
