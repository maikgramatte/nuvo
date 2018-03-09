/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import getTitles from '../Services/TitleExampleService';
import { LoadingIndicator } from '../Utils';
import { Overlay, Fade } from '../Utils/Animations';

import FacetContainer from './SearchFacetContainer/FacetContainer';
import ResultsStateBar from './SearchFacetContainer/ResultsStateBar';
import SearchSort from './SearchFacetContainer/SearchSort';
import Title from '../Components/Entity/Title';
import Pager from '../Components/Pager';
import SearchParamService, { facetsToUrlQuery, buildUrl, defaultParams } from '../Services/SearchParamsService';
import SearchFacetRemoveContainer from './SearchFacetContainer/SearchFacetRemoveContainer';
import './SearchFacetContainer/Scss/SearchFacetContainer.scss';

const SEARCH_RESULT_ANCHROR = 'sr';
const FACET_ANCHROR = 'refine';

class SearchFacetContainer extends Component {
  constructor(props) {
    super(props);

    const defaultQuery = {
      ...defaultParams,
      ...props.query,
    };

    this.state = {
      facetContainerVisibile: false,
      loaded: false,
      lazyLoading: false,
      sumary: {},
      facetConfig: [],
      items: [],
      query: defaultQuery,
      currentUrl: null,
    };

    this.onPagerChanged = this.onPagerChanged.bind(this);
    this.selectTerms = this.selectTerms.bind(this);
    this.closeFacetContainer = this.closeFacetContainer.bind(this);
    this.removeFacet = this.removeFacet.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  componentWillMount() {
    const query = SearchParamService(this.props.location, this.props.match);
    this.getSearchResults(query);

    if (this.props.location.hash === '#refine') {
      this.setState({
        facetContainerVisibile: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.hash === '#refine') {
      this.setState({
        facetContainerVisibile: true,
      });
      return;
    }

    const query = SearchParamService(nextProps.location, nextProps.match);
    this.setState({
      lazyLoading: true,
      query,
      facetContainerVisibile: false,
    });

    // async
    setTimeout(() => this.getSearchResults(query), 100);
  }

  onPagerChanged(newPage) {
    const query = { ...this.state.query };
    query.page = newPage;

    this.refreshPage(query);
  }

  onSortChange(newSort) {
    const query = {
      ...this.state.query,
      sort: newSort.value,
    };

    this.refreshPage(query);
  }

  getCurrentSRPath(currentQuery = this.state.query) {
    return buildUrl(this.props.path, currentQuery);
  }

  getSearchResults(query) {
    const params = {
      ...query,
      ...this.props.query,
    };

    getTitles(params).then((data) => {
      this.setState({
        loaded: true,
        query,
        facetConfig: data.facets,
        sumary: data.sumary,
        currentUrl: this.getCurrentSRPath(query),
        items: data.items,
        lazyLoading: false,
      });
    });
  }

  removeFacet(toRemovefacet) {
    if (toRemovefacet.facet === 'search') {
      return;
    }

    const { ff } = this.state.query;
    const index = ff.indexOf(toRemovefacet);

    if (index > -1) {
      ff.splice(index, 1);
    }

    this.refreshFacetedResults(ff);
  }

  closeFacetContainer() {
    const url = this.getCurrentSRPath();
    this.props.history.push(`${url}#${SEARCH_RESULT_ANCHROR}`);
  }

  selectTerms(terms) {
    this.setState({ facetContainerVisibile: false });
    this.refreshFacetedResults(terms);
  }

  refreshPage(query) {
    this.props.history.push(`${buildUrl(this.props.path, query)}#${SEARCH_RESULT_ANCHROR}`);
  }

  refreshFacetedResults(terms) {
    const query = { ...this.state.query };
    query.page = 0;
    query.ff = terms;

    this.refreshPage(query);
  }

  renderTitles() {
    if (this.state.items.length === 0) {
      return (
        <div className="text-center col-12" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          Your Search yield no Results. Please try to reduce the applied filters.
        </div>
      );
    }

    return this.state.items.map(item =>
      <Title key={item.key} id={item.key} {...item} />);
  }

  render() {
    if (this.state.loaded === false) {
      return <LoadingIndicator height={400} />;
    }

    const { sumary, query } = this.state;

    return (
      <div id="sr">
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" animateOnMount={false} isVisible={this.state.facetContainerVisibile}>
          <FacetContainer
            show={this.state.facetContainerVisibile}
            selectTerms={this.selectTerms}
            query={this.state.query}
            facetConfig={this.state.facetConfig}
            closeContainer={this.closeFacetContainer}
          />
        </Animated>

        <Animated animationIn="fadeIn" animationOut="slideOutDown" animateOnMount={false} isVisible={!this.state.facetContainerVisibile}>
          <Fade in={!this.state.facetContainerVisibile}>
            {this.state.items.length !== 0 &&
              <div className="search-header-bar">
                <div className="container-fluid">
                  <div className="row clearfix">
                    <div className="col-12 col-md-6">
                      <div className="result-sumary">
                        <ResultsStateBar {...sumary} />{' | '}
                        <NavLink to={`${this.state.currentUrl}#${FACET_ANCHROR}`}>
                          <i className="fas fa-cog" /> <span>Refine your Searchresults</span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <SearchSort
                        selected={this.state.query.sort}
                        changeSelection={this.onSortChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
            {query.ff.length > 0 &&
              <div className="container-fluid" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                <SearchFacetRemoveContainer
                  keywords={[]}
                  facets={query.ff}
                  facetConfig={this.state.facetConfig}
                  onRemove={this.removeFacet}
                />
              </div>
            }
            <div className="container-fluid">
              <div className="row no-gutter container-loading">
                <Overlay in={this.state.lazyLoading}>
                  <LoadingIndicator />
                </Overlay>
                {this.renderTitles()}
              </div>
            </div>
            <Pager {...sumary} onPageChanged={this.onPagerChanged} />
          </Fade>
        </Animated>
      </div>
    );
  }
}

export default withRouter(SearchFacetContainer);
