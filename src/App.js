/* eslint-disable react/prop-types */
import { Router } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'react-select/dist/react-select.css';
import 'react-notifications/dist/react-notifications.css';

import createBrowserHistory from 'history/createBrowserHistory';
import scrollIntoView from 'scroll-into-view';
import React, { Component } from 'react';
import Footer from './Components/Layout/Footer';
import ExampleRouter from './Router/';
import { pageView } from './Actions/index';
import Header from './Components/Layout/Header';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // Scoll listener
    history.listen(() => {
      props.pageView(history.location.pathname);
      if (history.location.hash) {
        const hash = history.location.hash.replace('#', '');
        scrollIntoView(document.getElementById(hash), {
          time: 500,
          ease: value => value * value * value,
          align: {
            topOffset: 150,
          },
        });
      } else {
        window.scrollTo(0, 0);
      }
    });
  }

  render() {
    return (
      <Router history={history}>
        <div id="outer-container">
          <NotificationContainer />
          <Header />
          <main id="page-wrap">
            <ExampleRouter history={history} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    pageView,
  }, dispatch);
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export {
  App,
  ConnectedApp,
};
