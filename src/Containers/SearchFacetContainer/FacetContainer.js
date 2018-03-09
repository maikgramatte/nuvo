/* eslint-disable react/jsx-closing-tag-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Facet from './Facet';
import SearchFacetRemoveContainer from './SearchFacetRemoveContainer';
import { Fade } from '../../Utils/Animations';

export function facetIsSelected(facets, facetIdent, label) {
  for (let x = 0; x < facets.length; x += 1) {
    if (facets[x].facet === facetIdent && facets[x].label === label) {
      return x;
    }
  }
  return -1;
}

function getSelectedItemsByFacet(selectedItems, facet) {
  const items = [];
  for (let x = 0; x < selectedItems.length; x += 1) {
    if (selectedItems[x].facet === facet) {
      items.push(selectedItems[x].label);
    }
  }
  return items;
}

const FacetsSubject = [
  {
    label: 'Social Sciences & Much more',
    key: '2433',
    count: 854,
  },
  {
    label: 'Psycoterapy',
    key: '134',
    count: 5,
  },
  {
    label: 'Mia',
    key: '1sas34',
    count: 5,
  },
  {
    label: 'Bla',
    key: '134sdsd',
    count: 5,
  },
  {
    label: 'Blubb',
    key: '13sdsd4',
    count: 5,
  },
];

const Facets = [
  {
    label: 'Marianne',
    key: '2433',
    count: 854,
  },
  {
    label: 'Mario',
    key: '12234',
    count: 50,
  },
  {
    label: 'Natalie',
    key: '134',
    count: 5,
  },
  {
    label: 'Natalie5',
    key: 'aa',
    count: 5,
  },
  {
    label: 'Mia',
    key: '1sas34',
    count: 5,
  },
  {
    label: 'Bla',
    key: '134sdsd',
    count: 5,
  },
  {
    label: 'Blubb',
    key: '13sdsd4',
    count: 5,
  },
];

const FacetConfig = [
  {
    label: 'Author',
    urlIdentifier: 'author',
    items: Facets,
  },
  {
    label: 'Location',
    urlIdentifier: 'location',
    items: Facets,
  },
  {
    label: 'Subject',
    urlIdentifier: 'subject',
    items: FacetsSubject,
  },
];

class FacetContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFacet: 'subject',
      selectedFacets: [],
      searching: false,
      results: 10,
    };

    this.close = this.close.bind(this);
    this.changeSelection = this.changeSelection.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Copy the Facets
    this.setState({
      selectedFacets: [...nextProps.query.ff],
    });
  }

  getFacetTabLabelProps(Object) {
    const Props = {};
    if (Object.urlIdentifier === this.state.activeFacet) {
      Props.className = 'nav-link active';
      // Props.ariaSelected = true;
    } else {
      Props.className = 'nav-link';
      // Props.ariaSelected = false;
    }

    return Props;
  }

  getFacetTabContentProps(Object) {
    const Props = {};
    if (Object.urlIdentifier === this.state.activeFacet) {
      Props.className = 'tab-pane fade in active';
    } else {
      Props.className = 'tab-pane fade';
    }
    return Props;
  }

  changeSelection(facetContainer, item) {
    const { selectedFacets } = this.state;
    const Index = facetIsSelected(selectedFacets, facetContainer, item.label);
    if (Index === -1) {
      const newFacet = {
        facet: facetContainer,
        label: item.label,
      };
      selectedFacets.push(newFacet);
      this.setState({
        selectedFacets,
        searching: true,
      });
    } else {
      const newFacets = [...selectedFacets];
      newFacets.splice(Index, 1);
      this.setState({
        selectedFacets: newFacets,
        searching: true,
      });
    }

    this.setState({
      searching: false,
      // results: selectedFacets.length * 33,
    });
    // setTimeout(() => , 500);
  }

  changeActiveTab(activeFacet, e) {
    e.preventDefault();

    this.setState({
      activeFacet,
    });

    return false;
  }

  close(e) {
    e.preventDefault();
    this.props.closeContainer();
  }

  submitForm() {
    this.props.selectTerms(this.state.selectedFacets);
  }

  renderFacetTabs() {
    for (let x = 0; x < FacetConfig.length; x += 1) {
      FacetConfig[x].selectedTerms = getSelectedItemsByFacet(
        this.state.selectedFacets,
        FacetConfig[x].urlIdentifier,
      );
    }

    const Tabs = FacetConfig.map((object, i) =>
      (<a
        key={i.toString()}
        id={`v-pills-${object.urlIdentifier}-tab`}
        data-toggle="pill"
        onClick={e => this.changeActiveTab(object.urlIdentifier, e)}
        href={`#v-pills-${object.urlIdentifier}-tab`}
        role="tab"
        {...this.getFacetTabLabelProps(object)}
        aria-controls={`v-pills-${object.urlIdentifier}`}
      >
        {object.label}
        <span className="badge badge-light float-right badge-pill">
          {object.selectedTerms.length > 0 &&
            <span>{object.selectedTerms.length}</span>
          }
          {object.items.length}
        </span>
      </a>
      ));

    const TabContent = FacetConfig.map((object, i) =>
      (<div
        key={i.toString()}
        id={`v-pills-${object.urlIdentifier}`}
        role="tabpanel"
        {...this.getFacetTabContentProps(object)}
        aria-labelledby={`v-pills-${object.urlIdentifier}-tab`}
      >
        <Fade in={object.urlIdentifier === this.state.activeFacet}>
          <Facet
            identifier={object.urlIdentifier}
            title={object.label}
            selectedItems={object.selectedTerms}
            items={object.items}
            selectItem={this.changeSelection}
          />
        </Fade>
      </div>
      ));

    return (
      <div className="row no-gutters tab-content-wrapper">
        <div className="col-3">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {Tabs}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content">
            {TabContent}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { show, closeContainer } = this.props;

    if (show === false) {
      return null;
    }

    return (
      <div className="facet-search-wrapper" id="refine">
        <div className="container-fluid">
          <button onClick={closeContainer} className="btn btn-link btn-lg float-right">
            &times;
          </button>
          <h2>Refine your Search</h2>

          <span className="float-right">
            {this.state.searching &&
              <i className="fas fa-spinner fa-spin" />
            }
            {this.state.results} Results
          </span>
          <p>You can refine your Search-Results using various facets.</p>
          {this.renderFacetTabs()}
          <hr />
          <div className="clearfix">
            <button className="btn btn-light float-right" onClick={this.submitForm}>
              Show Results
            </button>
            {this.state.selectedFacets.length !== 0 &&
              <div className="float-left">
                <strong>Selected Terms</strong>{' '}
                <SearchFacetRemoveContainer
                  keywords={[]}
                  facetConfig={this.props.facetConfig}
                  facets={this.state.selectedFacets}
                  onRemove={(item) => { this.changeSelection(item.facet, item); }}
                />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const propTypeQuery = {
  keyword: PropTypes.string.isRequired,
  facets: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    facet: PropTypes.string.isRequired,
  })),
};

const propTypeFacetConfig = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

FacetContainer.propTypes = {
  show: PropTypes.bool,
  facetConfig: PropTypes.objectOf({
    propTypeFacetConfig,
  }).isRequired,
  closeContainer: PropTypes.func.isRequired,
  selectTerms: PropTypes.func.isRequired,
  query: PropTypes.shape(propTypeQuery).isRequired,
};

FacetContainer.defaultProps = {
  show: false,
};

export default FacetContainer;
export {
  propTypeFacetConfig,
  propTypeQuery,
};
