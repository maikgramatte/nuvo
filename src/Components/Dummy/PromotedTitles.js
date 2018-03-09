/* eslint-disable react/prop-types, jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import Title from '../Entity/Title';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  lazyLoad: false,
  buttons: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
    },
  },
  ],
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      role="none"
    >
      <i className="fas fa-angle-right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      role="none"
    >
      <i className="fas fa-angle-left" />
    </div>
  );
}

function PromotedTitles(props) {
  const { items, className } = props;

  return (
    <div className={`image-slider ${className}`} style={{ paddingBottom: '4rem' }}>
      <div className="container-fluid" style={{ overflow: 'hidden' }}>
        <div className="headline-container">
          <h2>
            <span className="title">{props.title}</span>
            <span className="sub-title">{props.subtitle}</span>
          </h2>
        </div>
        <div className="float-right headerline-container-more-link">
          <a href="#more" className="btn btn-link"><i className="fas fa-chevron-right" /> See more</a>
        </div>
      </div>

      <div>
        <Slider {...settings}>
          {items.map(r => (
            <div key={`${r.key}&${r.title}`}>
              <Title {...r} className="c-in-slide" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

PromotedTitles.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PromotedTitles;
