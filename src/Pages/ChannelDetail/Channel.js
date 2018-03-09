/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoadingIndicator } from '../../Utils';
import FetchExampleJSONService from '../../Services/FetchExampleJSONSeverice';
import { ChannelTeaser } from '../../Components/Channel/';
import Placeholder from '../../Utils/placeholder.jpg';
import { Share as ShareBar } from './../../Components/Share';
import { addHeaderClassName, removeHeaderClassName } from '../../Actions';
import ChannelDetailNavigation from './ChannelDetailNavigation';
import FollowComponent from './Components/Follow';

const sampleData = {
  channel: {
    id: null,
    items: null,
    cover: Placeholder,
  },
  slug: null,
  related_streams: [],
  sample_data: true,
  loaded: false,
  follow: false,
  title: '_',
  show_sharebar: false,
  backgroundImage: '',
};

class Channel extends Component {
  constructor(props) {
    super(props);

    this.state = sampleData;
    this.service = new FetchExampleJSONService();
    // eslint-disable-next-line react/prop-types
  }

  componentWillMount() {
    this.fetchChannel(this.props.match.params.slug);
  }

  componentDidMount() {
    this.props.addHeaderClass('transparent');
  }

  componentWillReceiveProps({ match }) {
    if (this.props.match.params.slug !== match.params.slug) {
      this.fetchChannel(match.params.slug);
    }
  }

  componentWillUnmount() {
    this.props.removeHeaderClass('transparent');
  }

  toggleSharebar() {
    if (this.state.show_sharebar) {
      this.setState({
        show_sharebar: false,
      });
    } else {
      this.setState({
        show_sharebar: true,
      });
    }
  }

  fetchChannel(slug) {
    // Apply sample data on Slug-Change
    setTimeout(() => {
      this.setState(sampleData);
    }, 100);

    this.service.getChannelbySlug(slug).then(({ data }) => {
      this.setState({
        loaded: true,
        slug,
        channel: data.meta,
        follow: data.meta.following,
        title: data.meta.title,
        related_streams: data.related_streams,
        backgroundImage: data.meta.hero,
      });
    }).catch(() => {
      this.setState({
        loaded: false,
      });
    });
  }

  renderChannelInformation() {
    const { slug, channel } = this.state;

    return (
      <div className="container-fluid">
        <div className="row" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <div className="col-3 col-md-2">
            <img src={this.state.channel.cover} className="img-thumbnail rounded-circle" alt={this.state.channel.title} />
          </div>
          <div className="col-12 col-md-10">
            <h1 className="display-4">
              <small className="text-light">Channel</small> {this.state.title}
              <NavLink title="Play Stream" className="btn btn-link" to={`/channel/${slug}/stream`}>
                <i className="fas fa-play-circle fa-2x" />
              </NavLink>
            </h1>
            <hr />
            <div className="row">
              <div className="col-7">
                <span className="badge badge-pill badge-light">{channel.items} Videos</span>
                {' '}Short descriptional Subtitle / Managed by <NavLink to={`/channel/${slug}/about`}>{channel.editor}</NavLink>
              </div>
              <div className="col-5 text-right">
                <button className="btn btn-link" onClick={() => this.toggleSharebar()}>
                  <i className="fas fa-share-alt" />
                </button>
                <FollowComponent follow={this.state.follow} />
              </div>
            </div>
            <ShareBar show={this.state.show_sharebar} />
          </div>

          <div className="col-12 d-none">
            {this.state.related_streams.length > 0 &&
              <div>
                <hr />
                <h3>Releated Streams</h3>
                {this.renderRelatedStreams()}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }

  renderRelatedStreams() {
    return this.state.related_streams.map(item =>
      <ChannelTeaser key={item.id} {...item} />);
  }

  render() {
    const backgroundImage = `url(${this.state.backgroundImage})`;
    const { slug, channel } = this.state;
    const styles = {
      position: 'relative',
      zIndex: 2,
    };

    return (
      <div>
        <div className="channel-hero" style={{ backgroundImage }} />
        {this.state.loaded &&
          <div style={styles}>
            {this.renderChannelInformation()}
            <ChannelDetailNavigation channel={channel} slug={slug} history={this.props.history} />
          </div>
        }

        {this.state.loaded === false &&
          <div>
            <LoadingIndicator height={400} />
          </div>
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addHeaderClass: bindActionCreators(addHeaderClassName, dispatch),
    removeHeaderClass: bindActionCreators(removeHeaderClassName, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Channel);
