/* eslint-disable react/prop-types */
import React from 'react';

import Container from '../../Components/Container';
import ChannelOverview from './ChannelOverview';
import FetchExampleJSONService from '../../Services/FetchExampleJSONSeverice';

class ChannelWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      items: [],
    };

    this.service = new FetchExampleJSONService();
    this.service.getMyChannels().then(({ data }) => {
      this.setState({
        items: data[0].items,
        isLoading: false,
      });
    });
  }

  render() {
    return (
      <Container title={this.props.title} className="">
        <div className="page-head">
          <div className="container-fluid">
            <div className="row">
              <h1 className="page-title display-4">
                <small className="text-muted">Channels:</small>
              </h1>
              <div className="col-12 col-md-6">
                {this.props.select}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <ChannelOverview isLoading={this.state.isLoading} items={this.state.items} />
        </div>
      </Container>
    );
  }
}

export default ChannelWrapper;
