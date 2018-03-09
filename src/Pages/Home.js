/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addHeaderClassName, removeHeaderClassName } from '../Actions';
import PromotedTitles from '../Components/Dummy/PromotedTitles';
import getTitles from '../Services/TitleExampleService';
import './Scss/Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      // loaded: false,
    };
  }

  componentWillMount() {
    getTitles().then((data) => {
      if (typeof data === 'object') {
        this.setState({
          titles: data.items,
          // loaded: true,
        });
      }
    });
  }

  componentDidMount() {
    this.props.addHeaderClass('absolute transparent');
  }

  componentWillUnmount() {
    this.props.removeHeaderClass('absolute transparent');
  }

  render() {
    const { titles } = this.state;

    return (
      <div>
        <div className="home-hero-container">
          <div className="container-fluid">
            <div className="container-fluid">
              <div className="home-hero-container__title">
                <div className="content">
                  <h2>Babylon Berlin</h2>
                </div>
              </div>
            </div>
            <img src="/assets/20171021_BKP514.jpg" alt="" />
          </div>
        </div>

        <PromotedTitles className="normal" items={titles} title="New" subtitle="Releases" link="/" linkTitle="View all" />
        <PromotedTitles className="special" items={titles} title="Channel" subtitle="Cultural Antropology" link="/" linkTitle="View all" />
        <PromotedTitles className="normal2" items={titles} title="Your" subtitle="Subscriptions" link="/" linkTitle="View all" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addHeaderClass: bindActionCreators(addHeaderClassName, dispatch),
    removeHeaderClass: bindActionCreators(removeHeaderClassName, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Home);
