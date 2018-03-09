import React from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

function LoadingIndicator({ height, overlay }) {
  let extraClassName = 'd-flex justify-content-center align-self-center';

  if (overlay) {
    extraClassName += ' overlay';
  }

  const styles = { height: `${height}px`, zIndex: 10, position: 'relative' };

  return (
    <div className={extraClassName} style={styles}>
      <ReactLoading className="align-self-center" type="spin"color="#ddd" />
    </div>
  );
}

LoadingIndicator.propTypes = {
  height: PropTypes.number,
  overlay: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
  height: 200,
  overlay: false,
};

export default LoadingIndicator;
