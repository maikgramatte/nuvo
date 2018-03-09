/* eslint-disable react/prop-types, jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function UserIcon(props) {
  if (props.auth.loggedIn) {
    return (
      <NavLink to="/user" className="btn btn-link">
        <i className="fas fa-user-circle" />
        <span className="d-block d-sm-inline-block">Account</span>
      </NavLink>
    );
  }

  return (
    <NavLink to="/login" className="btn btn-link">
      <i className="fas fa-user" />
      <span className="d-block d-md-inline-block">Login</span>
    </NavLink>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

export default connect(
  mapStateToProps,
  null,
)(UserIcon);
