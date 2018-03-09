import React from 'react';
import PropTypes from 'prop-types';

function renderOption(option, selected, changeSelection) {
  const Title = `Sort by ${option.label}`;

  if (selected === option.value) {
    return (
      <li className="nav-item" key={`sort-${option.value}`}>
        <a title={Title} className="nav-link active" href="#selected" onClick={e => e.preventDefault()}>
          {option.label}
        </a>
      </li>
    );
  }

  return (
    <li className="nav-item" key={`sort-${option.value}`}>
      <a title={Title} className="nav-link" href="#sort" onClick={(e) => { e.preventDefault(); changeSelection(option); }}>
        {option.label}
      </a>
    </li>
  );
}

function SearchSort({ selected, options, changeSelection }) {
  return (
    <ul className="nav nav-tabs nav-tabs__sort-options">
      <div className="container-fluid">
        {options.map(item => renderOption(item, selected, changeSelection))}
      </div>
    </ul>
  );
}

SearchSort.propTypes = {
  selected: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  changeSelection: PropTypes.func.isRequired,
};

SearchSort.defaultProps = {
  options: [
    {
      value: 'title',
      label: 'Title',
    },
    {
      value: 'date',
      label: 'Release Date',
    },
    {
      value: 'rating',
      label: 'Rating',
    },
  ],
};

export default SearchSort;
