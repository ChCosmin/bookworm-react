import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/auth'; 


const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <Header size="huge" textAlign="center">Welcome to Homepage</Header>
    { isAuthenticated ? 
      (<div>
        <button type="button" onClick={logout}>Logout</button>
      </div>
      ) 
      : 
      (<div><Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link></div>) 
    }
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.token
  }
}
export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
