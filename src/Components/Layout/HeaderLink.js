import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HeaderLink(props) {
  const {
    icon,
    label,
    toLink,
    activeClassName,
    className,
  } = props;

  return (
    <NavLink to={toLink} className={className} activeClassName={activeClassName}>
      <i className={`fas ${icon} fa-fw`} />
      <span className="d-block d-md-inline-block">{label}</span>
    </NavLink>
  );
}

HeaderLink.propTypes = {
  icon: PropTypes.string.isRequired,
  toLink: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
};

HeaderLink.defaultProps = {
  activeClassName: 'active',
  className: 'btn btn-link',
};

export default HeaderLink;
