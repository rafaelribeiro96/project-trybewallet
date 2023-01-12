import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionLogin } from '../redux/actions';
import './Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    buttonDisable: true,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.activeButton());
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(actionLogin(email));
    history.push('/carteira');
  };

  activeButton = () => {
    const { email, password } = this.state;
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]/;
    const emailOk = regex.test(email);
    const passwordLength = 5;
    const passwordOk = password.length > passwordLength;
    const isValid = emailOk && passwordOk;
    this.setState({ buttonDisable: !isValid });
  };

  render() {
    const { buttonDisable, email, password } = this.state;
    return (
      <div>
        <form className="form-login" onSubmit={ this.onSubmitForm }>
          <h2 className="h2login">Faça seu login</h2>
          <input
            className="input-login email-login"
            type="email"
            name="email"
            id="email"
            value={ email }
            data-testid="email-input"
            placeholder="digite seu e-mail"
            onChange={ this.handleChange }
          />
          <input
            className="input-login password-login"
            type="password"
            name="password"
            id="password"
            value={ password }
            data-testid="password-input"
            placeholder="digite sua senha"
            onChange={ this.handleChange }
          />
          <button
            className="button-login"
            type="submit"
            disabled={ buttonDisable }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Login);
