import React, { Component } from 'react';
import FetchExampleJSONService from '../../Services/FetchExampleJSONSeverice';
import { ChannelTeaser, ChannelDummy } from '../../Components/Channel/';
import AccountNaviagtion from './AccountNavigation';

class MyChannels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: null,
      loaded: false,
    };
  }

  componentWillMount() {
    this.service = new FetchExampleJSONService();
    this.fetchChannels();
  }

  fetchChannels() {
    this.service.getMyChannels().then(({ data }) => {
      this.setState({
        channels: data[0].items,
        loaded: true,
      });
    });
  }

  renderChannels() {
    if (this.state.loaded === false) {
      return (
        <div className="row">
          <div className="col-12 col-md-6"><ChannelDummy /></div>
          <div className="col-12 col-md-6"><ChannelDummy /></div>
          <div className="col-12 col-md-6"><ChannelDummy /></div>
          <div className="col-12 col-md-6"><ChannelDummy /></div>
        </div>
      );
    }

    return (
      <div className="row">
        {this.state.channels.map(channel => (
          <div key={channel.id} className="col-12 col-md-6">
            <ChannelTeaser {...channel} />
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <AccountNaviagtion title="My Channels">
        {this.renderChannels()}
      </AccountNaviagtion>
    );
  }
}

export default MyChannels;
