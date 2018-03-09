import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scss/SlideOutIconButton.scss';

class SlideOutIconButton extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    const { onClick } = this.props;
    onClick(e);
  }

  render() {
    const {
      title,
      iconClass,
      label,
    } = this.props;

    return (
      <button className="btn btn-link btn-link-hover" title={title} onClick={this.onClickHandler}>
        <i className={iconClass} /><span>{label}</span>
      </button>
    );
  }
}

SlideOutIconButton.propTypes = {
  iconClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SlideOutIconButton;
