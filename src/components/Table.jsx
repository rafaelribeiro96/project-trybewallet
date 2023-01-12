import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delExpense, editExpense } from '../redux/actions';
import './Table.css';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <table className="table-component">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const { id, description, tag, method, currency, exchangeRates } = expense;
            const value = Number(expense.value).toFixed(2);
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>
                  {(
                    Number(exchangeRates[currency].ask) * Number(value)
                  ).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    className="button-table-editar"
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => dispatch(editExpense(expense.id)) }
                  >
                    Editar
                  </button>
                  <button
                    className="button-table-excluir"
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => dispatch(delExpense(expense.id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
