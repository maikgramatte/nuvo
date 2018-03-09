import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { connect } from 'react-redux';

import ChannelVideoBrowse from './ChannelVideoBrowse';
import EditorAbout from './Components/EditorAbout';

function getChannelLinks(slug, channel) {
  const SampleComponent = <div className="text-center" style={{ padding: '4rem' }}>Placeholder</div>;

  const ChannelLinks = [
    {
      key: 'videos',
      label: 'Videos',
      slug: `/channel/${slug}`,
      defaultPath: true,
      component: <ChannelVideoBrowse channel={channel} slug={slug} />,
    },
    {
      key: 'stream',
      label: <div><i className="fas fa-play-circle" /> Stream</div>,
      slug: `/channel/${slug}/stream`,
      defaultPath: false,
      component: SampleComponent,
    },
    {
      key: 'persons',
      label: 'Persons',
      slug: `/channel/${slug}/persons`,
      defaultPath: false,
      component: SampleComponent,
    },
    {
      key: 'new',
      label: 'New Releases',
      slug: `/channel/${slug}/new`,
      defaultPath: false,
      component: SampleComponent,
    },
    {
      key: 'about',
      label: 'About',
      slug: `/channel/${slug}/about`,
      defaultPath: false,
      component: <EditorAbout name={channel.editor} about={channel.editor_about} />,
    },
  ];

  return ChannelLinks;
}

class ChannelDetailNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/prop-types
      links: getChannelLinks(props.slug, props.channel),
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { slug, history } = this.props;
    const { links } = this.state;

    return (
      // eslint-disable-next-line react/prop-types
      <Router history={history}>
        <div>
          <ul className="nav nav-tabs" slug={slug}>
            <div className="container-fluid">
              {links.map(item => (
                <li className="nav-item" key={item.slug} style={{ display: 'inline-block' }}>
                  <NavLink exact to={item.slug} activeClassName="active" className="nav-link">{item.label}</NavLink>
                </li>))}
            </div>
          </ul>
          <div>
            <Switch>
              {links.map(item => (
                <Route
                  key={item.slug}
                  exact={item.defaultPath}
                  path={item.slug}
                  component={() => item.component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

ChannelDetailNavigation.propTypes = {
  slug: PropTypes.string.isRequired,
  channel: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(
  null,
  null,
)(ChannelDetailNavigation);
