/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import getSuggestions from '../Services/QuickSearchAPIService';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchKeywordInput extends Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: props.defaultKeyword,
      suggestions: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.defaultKeyword,
    });
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });

    if (method === 'click') {
      setTimeout(() => this.onSubmit(event), 20);
    }
  };

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions({ key: value }).then((data) => {
      this.setState({
        suggestions: data.results,
      });
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search Keywords',
      value,
      className: 'form-control form-control-lg',
      onChange: this.onChange,
      onSubmit: this.onSubmit,
    };

    return (
      <form onSubmit={this.onSubmit} className="react-autosuggest-wrapper">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <i className="fas fa-pen-square" />
      </form>
    );
  }
}

export default SearchKeywordInput;
