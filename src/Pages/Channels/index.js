/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import Select from 'react-select';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import ReactCSSTransitionReplace from 'react-css-transition-replace';
import ChannelWrapper from './ChannelWrapper';
import FetchExampleJSONService from '../../Services/FetchExampleJSONSeverice';

function renderSelectLinkOption(option) {
  return (
    <div>
      {option.label}
      <span className="badge badge-secondary float-right">
        {option.items}
      </span>
    </div>
  );
}

class ChannelNavigationWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currentCategory: 'all',
      isLoading: true,
    };

    this.service = new FetchExampleJSONService();
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.service.fetch('Channel-Categories').then(({ data }) => {
      this.setState({
        categories: data,
        isLoading: false,
      });
    });
  }

  setActiveCatgeory(slug) {
    if (slug === 'all') {
      this.props.history.push('/channels/');
    } else {
      this.props.history.push(`/channels/${slug}`);
    }

    this.setState({
      currentCategory: slug,
    });
  }

  handleChange(selectedOption) {
    if (selectedOption) {
      this.setActiveCatgeory(selectedOption.slug);
    } else {
      this.setActiveCatgeory('all');
    }
  }

  render() {
    const SelectComponent = (
      <Select
        name="form-field-name"
        value={this.state.currentCategory}
        options={this.state.categories}
        onChange={this.handleChange}
        optionRenderer={renderSelectLinkOption}
        isLoading={this.state.categories_loaded}
        placeholder="Select a Category"
        clearable={false}
        searchable={false}
      />);

    return (
      <Router history={this.props.history}>
        <Route render={({ location }) => (
          <ReactCSSTransitionReplace
            transitionName="fade-fast"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={400}
          >
            <div key={location.pathname}>
              <Switch location={location}>
                {this.state.categories.map(item => (
                  <Route exact key={item.slug} path={`/channels/${item.slug}`} component={() => <ChannelWrapper select={SelectComponent} title={item.label} slug={item.slug} />} />
                ))}
                <Route exact path="/channels" component={() => <ChannelWrapper select={SelectComponent} title="All Channels" slug="all" />} />
                {this.state.isLoading === false &&
                  <Redirect to="/channels" />
                }
              </Switch>
            </div>
          </ReactCSSTransitionReplace>
          )}
        />
      </Router>
    );
  }
}

export default (ChannelNavigationWrapper);
