/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { AuthRequiered } from '../../Utils/user';

import MyChannels from './MyChannels';
import UserMainPage from './UserPage';
import UserEditPage from './UserEdit';
import UserSettingsPage from './UserSettings';

class Account extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route render={({ location }) => (
          <ReactCSSTransitionReplace
            transitionName="fade-fast"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={400}
          >
            <div key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/user" component={UserMainPage} />
                <Route exact path="/user/mychannels" component={MyChannels} />
                <Route exact path="/user/edit" component={UserEditPage} />
                <Route exact path="/user/settings" component={UserSettingsPage} />
                <Redirect to="/Page404" />
              </Switch>
            </div>
          </ReactCSSTransitionReplace>
          )}
        />
      </Router>
    );
  }
}

export default AuthRequiered(Account);
