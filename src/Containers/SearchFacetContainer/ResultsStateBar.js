/* eslint-disable react/prop-types */
import React from 'react';

export default function ResultStateBar({ count, limit, page }) {
  const from = parseInt(limit, 0) * parseInt(page, 0);
  const to = from + limit;

  return (
    <span>
      Showing {from} - {to} titles from{' '}
      <strong>{count}</strong> Results
    </span>
  );
}
