/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';

function TwitterCard({
  url,
  title,
  description,
  image,
}) {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}

export default TwitterCard;
