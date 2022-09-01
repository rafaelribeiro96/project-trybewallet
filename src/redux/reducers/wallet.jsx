import {
  GET_CURRENCY,
  SUCCESS_API_CURRENCY,
  ADD_EXPENSE,
  DEL_EXPENSE,
  EDIT_EXPENSE,
  COMPLETE_EDIT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  isFetching: false,
  editing: false,
};

const filterEdit = (state, action) => {
  const { expenses, idToEdit } = state;
  const expenseEdited = expenses.filter((expense) => expense.id === idToEdit);
  const editingExpense = expenses.filter((expense) => expense.id !== idToEdit);
  const [expensiveToArrayEdited] = expenseEdited;
  const newEditExpense = { ...expensiveToArrayEdited, ...action.expense };
  editingExpense.splice(idToEdit, 0, newEditExpense);
  return editingExpense;
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      isFetching: true,
    };
  case SUCCESS_API_CURRENCY:
    return {
      ...state,
      currencies: action.currencies,
      isFetching: false,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.expense, id: state.expenses.length }],
      isFetching: false,
    };
  case DEL_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
      isFetching: false,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      idToEdit: action.id,
      editing: true,
    };

  case COMPLETE_EDIT:
    return {
      ...state,
      editing: false,
      expenses: filterEdit(state, action),
    };
  default:
    return state;
  }
};

export default wallet;
