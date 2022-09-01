export const LOGIN = 'LOGIN';
export const GET_CURRENCY = 'GET_CURRENCY';
export const SUCCESS_API_CURRENCY = 'SUCCESS_API_CURRENCY';

export const actionLogin = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrencies = () => ({
  type: GET_CURRENCY,
});

export const successAPICurrency = (currencies) => ({
  type: SUCCESS_API_CURRENCY,
  currencies,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(getCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const obj = await response.json();
  const arrCurrency = Object.keys(obj).filter((currency) => currency !== 'USDT');
  dispatch(successAPICurrency(arrCurrency));
};
