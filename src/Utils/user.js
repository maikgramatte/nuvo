import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

export function AuthRequiered(WrappedComponent) {
  return connect(mapStateToProps)(class AuthEnhancer extends WrappedComponent {
    render() {
      if (!this.props.auth.loggedIn) {
        return (
          <Redirect to={{
            pathname: '/login',
            search: `?redirect=${this.props.match.url}`,
            state: { auth_url: this.props.match.url },
          }}
          />
        );
      }

      return super.render();
    }
  });
}

function UserLogged(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      if (!this.props.auth) {
        throw new Error('Please apply Redux to the container');
      }

      if (!this.props.auth.loggedIn) {
        return super.render();
      }

      const redirectPath = '/';

      return (
        <div>
          <Redirect to={redirectPath} />
        </div>
      );
    }
  };
}

export default UserLogged;
