import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({ isConfirmed }) => (  
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {isConfirmed && 
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Link to="/">To Homepage</Link>
    </div>
    }
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed
  }
}

export default connect(mapStateToProps)(DashboardPage);