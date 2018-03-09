import React, { Component } from 'react';
import { ShareIcons } from '../Share/Share';

// Cite Email Share Playlist Embed/Link Select item

const Items = [
  {
    id: 'share',
    label: 'Share',
    default: true,
  },
  {
    id: 'cite',
    label: 'Cite',
    default: false,
  },
  {
    id: 'embed',
    label: 'Embed/Link',
    default: false,
  },
];

class EntityShareComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'share',
    };

    this.clickTab = this.clickTab.bind(this);
  }

  clickTab(e, item) {
    e.preventDefault();
    this.setState({
      activeTab: item.id,
    });
  }

  renderTab(item) {
    const styles = { display: 'inline-block' };
    const { activeTab } = this.state;

    if (activeTab === item.id) {
      return (
        <li className="nav-item" key={item.id} style={styles}>
          <a className="nav-link active" href="#a" onClick={e => e.preventDefault()}>
            {item.label}
          </a>
        </li>);
    }

    return (
      <li className="nav-item" key={item.id} style={styles}>
        <a className="nav-link" href="#b" onClick={e => this.clickTab(e, item)}>
          {item.label}
        </a>
      </li>
    );
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="entity-share-wrapper">
        <ul className="nav nav-tabs">
          <div className="container-fluid">
            {Items.map(item => this.renderTab(item, this.state.activeTab))}
          </div>
        </ul>
        <div className="container-fluid">
          <div style={{ margin: '1rem 0' }}>
            {activeTab === 'share' &&
              <div>
                { ShareIcons }
              </div>
            }
            {activeTab === 'embed' &&
              <div>
                Embed Options
              </div>
            }
            {activeTab === 'cite' &&
              <div>
                Cite Options
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}


export default EntityShareComponent;
