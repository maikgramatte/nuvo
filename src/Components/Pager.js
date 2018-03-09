import React from 'react';
import PropTypes from 'prop-types';
import ReactPager from 'react-pager';

export default function Pager({
  count,
  limit,
  page,
  onPageChanged,
}) {
  if (limit >= count) {
    return null;
  }

  return (
    <div>
      <hr />
      <div className="container-fluid">
        <ReactPager
          total={parseInt(count / limit, 0)}
          current={(page)}
          visiblePages={10}
          titles={{ first: '<|', last: '>|' }}
          className="pagination-sm"
          onPageChanged={onPageChanged}
        />
      </div>
    </div>
  );
}

Pager.propTypes = {
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
};
