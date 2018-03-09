
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageTitle } from '../Utils/';
import { loginUser } from '../Actions';
import UserLogged from '../Utils/user';

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      redirectPath: '/',
    };

    // When we got redirected
    // eslint-disable-next-line react/prop-types
    if (props.location.state && this.props.location.state.auth_url) {
      this.state.redirectPath = this.props.location.state.auth_url;
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.setUsername(this.state.username);
  }

  render() {
    return (
      <div className="container">
        <PageTitle title="Login" />
        <h1>Login</h1>
        <p><em>Just enter a random Username.</em></p>

        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="usernNameField">Please enter your Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.handleChange}
              id="usernNameField"
              required
              placeholder=""
            />
          </div>
          <button type="submit" className="btn btn-sm btn-outline-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUsername: (name) => {
      dispatch(loginUser(name));
    },
  };
}

UserLogin.propTypes = {
  setUsername: PropTypes.func,
};

UserLogin.defaultProps = {
  setUsername: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLogged(UserLogin));
