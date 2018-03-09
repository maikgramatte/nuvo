import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleFollowChannel = this.toggleFollowChannel.bind(this);
  }

  toggleFollowChannel() {
    this.setState({});
  }

  render() {
    const { follow } = this.props;

    if (!follow) {
      return (
        <button className="btn btn-primary" onClick={this.toggleFollowChannel}>
          <i className="fas fa-angle-right" /> Follow
        </button>
      );
    }

    return (
      <button className="btn btn-outline-primary" onClick={this.toggleFollowChannel}>
        <i className="fas fa-check-circle" /> Following
      </button>
    );
  }
}

Follow.propTypes = {
  follow: PropTypes.bool.isRequired,
};

export default Follow;
