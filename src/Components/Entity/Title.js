import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import SlideOutIconButton from './SlideOutIconButton';
import DummyImage from '../../Utils/placeholderImage.png';

const Title = ({
  img,
  id,
  title,
  preview,
  className,
  description,
}) => (
  <div className={className}>
    <NavLink className="c-item" to={`/work/${id}`} title={title}>
      <div className="c-item__cover">
        <div className="c-item__channel" title="Channel: Criterium Collection">
          <i className="fab fa-cuttlefish" data-fa-transform="shrink-3.5 down-0.25 right-0.25" data-fa-mask="fas fa-square" />
          <span>Criterium Collection</span>
        </div>
        {preview &&
          <div className="c-item__flag">
            Preview
          </div>
        }
        <div className="c-item__rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <div className="c-item__watch-later">
          <SlideOutIconButton title="Mark to watch later" label="Watch later" iconClass="far fa-clock" onClick={(e) => { e.preventDefault(); }} />
        </div>
        <LazyLoad height={300} placeholder={<img src={DummyImage} alt="" />}>
          <img src={`${img}&${id}`} alt={title} />
        </LazyLoad>
      </div>
      <div className="c-item__teaser">
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
    </NavLink>
  </div>
);

Title.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.bool,
  className: PropTypes.string,
  description: PropTypes.string,
};

Title.defaultProps = {
  preview: false,
  className: 'col-12 col-sm-6 col-md-3 with-transition',
  description: 'written by Republic of Korea, in Susan Chun Lee Collection (Collection 14: Box 5, folder 2) (Honolulu, HI) , 2 page(s)',
};

export default Title;
