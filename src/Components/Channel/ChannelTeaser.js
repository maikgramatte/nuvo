/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ChannelTeaserPropType = {
  slug: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
};

export default function ChannelTeaser(props) {
  const {
    slug,
    cover,
    title,
    items,
  } = props;

  return (
    <NavLink className="row align-items-center" to={`/channel/${slug}`}>
      <div className="col-4">
        <img className="img-fluid img-thumbnail rounded-circle" src={`${cover}`} alt={title} />
      </div>
      <div className="col">
        <h4 className="card-title">{title}</h4>
        <p className="small text-muted">
          Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor.
        </p>
        <p className="small text-muted">{items} Items</p>
      </div>
    </NavLink>
  );
}

ChannelTeaser.propTypes = ChannelTeaserPropType;
