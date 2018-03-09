import React from 'react';
import PropTypes from 'prop-types';
import ChannelTeaser from '../../Components/Channel/ChannelTeaser';
import ChannelDummy from '../../Components/Channel/ChannelDummy';

const ChannelDummyCount = 4;
const ChannelClassName = 'col-12 col-md-6';

function getDummyItems() {
  const DummyItems = [];

  for (let i = 0; i < ChannelDummyCount; i += 1) {
    DummyItems.push(<div className={ChannelClassName} key={i}><ChannelDummy /></div>);
  }

  return DummyItems;
}

function ChannelOverview(props) {
  const { isLoading, items } = props;

  return (
    <div className="row" style={{ paddingBottom: '2rem' }}>
      <div className="col-12">
        {isLoading &&
          <div className="row">
            {getDummyItems()}
          </div>
        }
        {isLoading === false &&
          <div className="row">
            {items.map(channel => (
              <div key={channel.slug} className={`channel-teaser ${ChannelClassName}`}>
                <ChannelTeaser mode="mychannels" {...channel} />
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

ChannelOverview.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
};

ChannelOverview.defaultProps = {
  items: [],
  isLoading: false,
};

export default ChannelOverview;

export {
  ChannelDummyCount,
};
