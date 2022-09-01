export const LOGIN = 'LOGIN';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SUCCESS_API_CURRENCY = 'SUCCESS_API_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

const urlApi = 'https://economia.awesomeapi.com.br/json/all';

export const actionLogin = (email) => ({
  type: LOGIN,
  email,
});

const getCurrencies = () => ({
  type: GET_CURRENCY,
});

const successAPICurrency = (currencies) => ({
  type: SUCCESS_API_CURRENCY,
  currencies,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(getCurrencies());
  const response = await fetch(urlApi);
  const obj = await response.json();
  const arrCurrency = Object.keys(obj).filter((currency) => currency !== 'USDT');
  dispatch(successAPICurrency(arrCurrency));
};

const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const fetchAddExpense = (expense) => async (dispatch) => {
  const { value, description, currency, method, tag } = expense;
  const response = await fetch(urlApi);
  const obj = await response.json();
  delete obj.USDT;
  const expenseObj = {
    id: obj.length,
    value,
    description,
    currency,
    method,
    tag,
    exchangeRates: obj,
  };
  dispatch(addExpense(expenseObj));
};
