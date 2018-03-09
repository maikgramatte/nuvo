import React from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { LoadableDefaultOptions, Loadable } from '../Utils/LoadableComponent';

const LoadableComponentSearchPage = Loadable({
  loader: () => import('../Pages/SearchPage'),
  ...LoadableDefaultOptions,
});

const LoadableComponentDevHome = Loadable({
  loader: () => import('../Pages/DevHome'),
  ...LoadableDefaultOptions,
});

const LoadableComponentAbout = Loadable({
  loader: () => import('../Pages/About'),
  ...LoadableDefaultOptions,
});

const LoadableComponentLazyloadingExample = Loadable({
  loader: () => import('../Pages/LazyloadingExample'),
  ...LoadableDefaultOptions,
});

const LoadableComponentLogin = Loadable({
  loader: () => import('../Pages/Login'),
  ...LoadableDefaultOptions,
});

const LoadableComponentPage404 = Loadable({
  loader: () => import('../Pages/Page404'),
  ...LoadableDefaultOptions,
});

const LoadableComponentChannelsIndex = Loadable({
  loader: () => import('../Pages/Channels/index'),
  ...LoadableDefaultOptions,
});

const LoadableComponentAccountIndex = Loadable({
  loader: () => import('../Pages/Account/index'),
  ...LoadableDefaultOptions,
});

const LoadableComponentChannelDetail = Loadable({
  loader: () => import('../Pages/ChannelDetail/Channel'),
  ...LoadableDefaultOptions,
});

const LoadableComponentHome = Loadable({
  loader: () => import('../Pages/Home'),
  ...LoadableDefaultOptions,
});

const LoadableComponentNotifications = Loadable({
  loader: () => import('../Pages/Home'),
  ...LoadableDefaultOptions,
});

const LoadableComponentWork = Loadable({
  loader: () => import('../Pages/Work'),
  ...LoadableDefaultOptions,
});

export default function ExampleRouter(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <Router history={props.history}>
      <div>
        <Switch>
          <Route exact path="/" component={LoadableComponentDevHome} />
          <Route exact path="/home" component={LoadableComponentHome} />
          <Route exact path="/notifications" component={LoadableComponentNotifications} />
          <Route exact path="/about" component={LoadableComponentAbout} />
          <Route exact path="/loading" component={LoadableComponentLazyloadingExample} />
          <Route exact path="/login" component={LoadableComponentLogin} />
          <Route exact path="/Page404" component={LoadableComponentPage404} />

          {/* Contains own routing system */}
          <Route path="/user" component={LoadableComponentAccountIndex} />
          <Route exact path="/search" component={LoadableComponentSearchPage} />
          <Route exact path="/search/:keyword" component={LoadableComponentSearchPage} />
          <Route path="/channel/:slug" component={LoadableComponentChannelDetail} />
          <Route exact path="/work/:slug" component={LoadableComponentWork} />
          <Route path="/channels" component={LoadableComponentChannelsIndex} />

          {/* 404 Page */}
          <Redirect to="/Page404" />
        </Switch>
      </div>
    </Router>
  );
}
