import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    const { editing } = this.props;
    return (
      <div>
        <Header />
        { editing ? <EditForm /> : <WalletForm />}
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  editing: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  editing: state.wallet.editing,
});

export default connect(mapStateToProps)(Wallet);
