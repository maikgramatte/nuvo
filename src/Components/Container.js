import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../Utils/PageTitle';

const Container = ({ title, children, className }) => (
  <div className={className}>
    <PageTitle title={title} />
    {children}
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: 'container-fluid',
};

export default Container;
