import React from 'react';
import PropTypes from 'prop-types';
import FacetRemoveButton from './FacetRemoveButton';
import { propTypeFacetConfig } from './FacetContainer';

function SearchFacetRemoveContainer({
  keywords,
  facets,
  onRemove,
  facetConfig,
}) {
  const Buttons = [];

  for (let x = 0; keywords < x; x += 1) {
    const term = {
      label: keywords[x],
      facet: 'search',
    };

    const Element = (
      <FacetRemoveButton
        categoryLabel="Search"
        key={`searchkey-${keywords}`}
        term={term}
        onRemove={onRemove}
      />
    );

    Buttons.push(Element);
  }

  const Facets = facets.map(item => (
    <FacetRemoveButton
      categoryLabel={facetConfig[item.facet].label}
      key={`remove-${item.label}-${item.facet}`}
      term={item}
      onRemove={onRemove}
    />
  ));

  Buttons.push(Facets);

  if (Buttons.length === 0) {
    return null;
  }

  return (
    <div className="btn-group" role="group" aria-label="Applied Facets">
      {Buttons}
    </div>
  );
}

SearchFacetRemoveContainer.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  facets: PropTypes.arrayOf(PropTypes.shape({
    facet: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onRemove: PropTypes.func.isRequired,
  facetConfig: propTypeFacetConfig,
};

SearchFacetRemoveContainer.defaultProps = {
  keywords: [],
  facets: [],
  facetConfig: [],
};

export default SearchFacetRemoveContainer;
