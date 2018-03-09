import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Facet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

    this.search = this.search.bind(this);
  }

  search(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    const {
      title,
      items,
      selectItem,
      selectedItems,
      identifier,
    } = this.props;

    const baseIdentifer = `ident-${identifier}-`;

    // TODO, lacking search
    let searchItems = [];
    if (this.state.search) {
      for (let e = 0; e < items.length; e += 1) {
        const n = items[e].label.includes(this.state.search);
        if (n) {
          searchItems.push(items[e]);
        }
      }
    } else {
      searchItems = [...items];
    }

    for (let e = 0; e < searchItems.length; e += 1) {
      if (selectedItems.indexOf(searchItems[e].label) !== -1) {
        searchItems[e].checked = true;
        searchItems[e].labelClassName = 'd-block selected';
      } else {
        searchItems[e].checked = false;
        searchItems[e].labelClassName = 'd-block';
      }
    }

    const listItems = searchItems.map(item => (
      <label htmlFor={`${baseIdentifer}-${item.key}`} className={item.labelClassName} key={item.key}>
        <span className="pill float-right">{item.count}</span>
        <input type="checkbox" checked={item.checked} id={`${baseIdentifer}-${item.key}`} onChange={e => selectItem(identifier, item, e)} /> {item.label}
      </label>
    ));

    return (
      <fieldset>
        <legend>{title}</legend>
        <div>
          <div className="form-group">
            <label className="sr-only" htmlFor={`search-${identifier}`}>Email address</label>
            <input id={`search-${identifier}`} value={this.state.search} onChange={this.search} type="search" className="form-control" placeholder={`Search within ${title}`} />
          </div>
        </div>
        <div className="facet-group-items">
          {listItems}
          {searchItems.length === 0 &&
            <div>Your Search has no results</div>
          }
        </div>
      </fieldset>
    );
  }
}

Facet.propTypes = {
  title: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })),
};

Facet.defaultProps = {
  selectedItems: [],
  items: [],
};

export default Facet;
