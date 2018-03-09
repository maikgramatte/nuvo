import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchFacetContainer from '../../Containers/SearchFacetContainerLoader';

class ChannelVideoBrowse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SearchFacetContainer
        query={{ channel: this.props.slug }}
        path={`/channel/${this.props.slug}`}
      />);
  }
}

ChannelVideoBrowse.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default ChannelVideoBrowse;
