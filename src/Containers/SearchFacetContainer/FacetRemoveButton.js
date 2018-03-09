import React from 'react';
import PropTypes from 'prop-types';

function FacetRemoveButton({ term, categoryLabel, onRemove }) {
  return (
    <button title={`Remove "${term.label}" from Search`} className="btn btn-light btn-facet-remove" onClick={() => onRemove(term)}>
      <span>{categoryLabel}</span>
      {term.label} <i className="far fa-times-circle" />
    </button>
  );
}

FacetRemoveButton.propTypes = {
  categoryLabel: PropTypes.string.isRequired,
  term: PropTypes.shape({
    facet: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FacetRemoveButton;
