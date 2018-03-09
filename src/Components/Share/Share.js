import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '../../Utils/Animations';

const ShareIcons = (
  <p>
    <i className="fab fa-facebook-square fa-2x" />&nbsp;
    <i className="fab fa-google-plus-square fa-2x" />&nbsp;
    <i className="fab fa-linkedin fa-2x" />&nbsp;
    <i className="fab fa-twitter-square fa-2x" />&nbsp;
  </p>);

function ShareBar({ show }) {
  return (
    <Fade in={show} className="share">
      {show &&
        <div className="card card-body">
          <h2 className="display-6">Share this Page</h2>
          <hr />
          {ShareIcons}
        </div>
      }
    </Fade>
  );
}

ShareBar.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ShareBar;

export {
  ShareIcons,
};
