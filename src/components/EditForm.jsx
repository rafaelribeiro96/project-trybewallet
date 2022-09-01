import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { completeEdit } from '../redux/actions';

class EditForm extends Component {
  state = {
    value: '',
    currency: '',
    method: '',
    tag: '',
    description: '',
  };

  componentDidMount() {
    const { expenses, idToEdit } = this.props;
    const expenseToEdit = expenses[idToEdit];
    this.setState({
      value: expenseToEdit.value,
      currency: expenseToEdit.currency,
      method: expenseToEdit.method,
      tag: expenseToEdit.tag,
      description: expenseToEdit.description,
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(completeEdit(this.state));
  };

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <form onSubmit={ this.onSubmitForm }>

          <label htmlFor="value-input">
            Valor:
            <input
              type="number"
              name="value"
              id="value-input"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
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
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency-input">
            Moeda:
            <select
              name="currency"
              id="currency-input"
              value={ currency }
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              { currencies.map((item) => (
                <option key={ item } value={ item }>{ item }</option>
              ))}
            </select>
          </label>

          <select
            name="method"
            id="method-input"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>

          </select>

          <select
            name="tag"
            id="tag-input"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>

          <button type="submit">Editar despesa</button>
        </form>
      </div>
    );
  }
}

EditForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  idToEdit: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
});

export default connect(mapStateToProps)(EditForm);
