/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SearchFacetContainer from '../Containers/SearchFacetContainerLoader';
import Container from '../Components/Container';
import SearchKeywordInput from '../Containers/SearchKeywordInput';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.match.params.keyword || '',
    };

    this.onEnterNewKeyword = this.onEnterNewKeyword.bind(this);
    this.onRemoveKeyword = this.onRemoveKeyword.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      keyword: newProps.match.params.keyword || '',
    });
  }

  onRemoveKeyword() {
    this.props.history.push('/search');
  }

  onEnterNewKeyword(keyword) {
    this.props.history.push(`/search/${keyword}`);
  }

  render() {
    const { keyword } = this.state;
    let DocumentTitle = 'Explore Titles';
    let HeadTitle = 'Explore Titles';

    if (keyword !== '') {
      HeadTitle = `Searchresults for "${keyword}"`;
      DocumentTitle = 'Searchresults';
    }

    let Url = '/search';
    if (keyword !== '') {
      Url += `/${keyword}`;
    }

    return (
      <Container title={HeadTitle} className="">
        <div className="page-head" style={{ marginBottom: 0 }}>
          <div className="container-fluid">
            <div className="row">
              <h1 className="page-title display-4">
                {DocumentTitle}
              </h1>
              <div style={{ maxWidth: '500px' }}>
                <SearchKeywordInput
                  onSubmit={this.onEnterNewKeyword}
                  defaultKeyword={keyword}
                  onKeywordRemove={this.onRemoveKeyword}
                />
              </div>
            </div>
          </div>
        </div>
        <SearchFacetContainer
          query={{ keyword }}
          path={Url}
        />
      </Container>
    );
  }
}

export default SearchPage;
