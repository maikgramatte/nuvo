/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'throttle-debounce';
import { NavLink } from 'react-router-dom';
import UserIcon from './UserIcon';
import HeaderLink from './HeaderLink';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerClassName: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(50, () => this.handleScroll()));
  }

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 120 && this.state.headerClassName !== 'scrolled') {
      this.setState({
        headerClassName: 'scrolled',
      });
    } else if (scrollTop < 50 && this.state.headerClassName !== '') {
      this.setState({
        headerClassName: '',
      });
    }
  }

  render() {
    const extraClassNames = this.props.app.headerClassName.join(' ');

    return (
      <header id="header" className={`${this.state.headerClassName} ${extraClassNames}`}>
        <div>
          <div className="row">
            <div className="col col-3 col-image">
              <NavLink to="/home">
                <img className="img-fluid d-none d-md-inline logo" src="/assets/white_logo.png" alt="Logo" />
                <img className="img-fluid d-md-none" src="/assets/logo-mobile.png" alt="Logo" />
              </NavLink>
            </div>
            <div className="col text-right text-md-left">
              <HeaderLink toLink="/channels" icon="fa-cube" label="Channels" />
              <HeaderLink toLink="/loading" icon="fa-film" label="Discover" />
              <span className="float-none float-md-right">
                <HeaderLink toLink="/search" icon="fa-search" label="Search" />
                <UserIcon />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    auth: state.authentication,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Header);
