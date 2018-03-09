import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageTitleConfig = process.env.REACT_APP_SITENAME;

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} {PageTitleConfig}</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
