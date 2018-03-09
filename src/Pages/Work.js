/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PromotedTitles from '../Components/Dummy/PromotedTitles';
import getTitles from '../Services/TitleExampleService';
import ChannelTeaser from '../Components/Channel/ChannelTeaser';
import TwitterCard from '../Components/Seo/TwitterCard';
import EntityShareComponent from '../Components/Entity/EntityShareComponent';
import './Scss/Work.scss';

const SAMPLE_IMAGE_URL = 'http://gilbertford.com/news/wp-content/uploads/2012/07/inside-cover2.jpg';
const Channel = {
  id: 2,
  slug: 'ww2',
  title: 'World War II',
  cover: '/assets/ww2.jpg?haha',
  items: 400,
};

const VideoData = [
  {
    id: 'Field of Interest',
    facet: 'field_of_interest',
    value: 'Environmental Studies',
  },
  {
    id: 'Accolades / Awards',
    value: [
      'Tribeca Film Festival',
      'Traverse City Film Festival',
      'Martha\'s Vineyard Film Festival',
      'Traverse City Film Festival',
    ],
  },
  {
    id: 'Credits',
    value: [
      'Kyle Cadotte',
      'Teena Pugliese',
      'Doug Good Feather',
      'Kyle Cadotte',
    ],
  },
  {
    id: 'Screenwriting',
    value: [
      'Josh Fox',
      'Floris Ptesan Hunka',
      'Floris White Bull',
    ],
  },
  {
    id: 'Cinematography',
    value: [
      'Josh Fox',
      'James Spione',
      'Myron Dewey',
    ],
  },
  {
    id: 'Duration',
    value: 5335,
  },
  {
    id: 'Format',
    value: 'Video',
  },
  {
    id: 'Sub Genre',
    value: 'Expository',
  },
  {
    id: 'Organization',
    value: 'Bullfrog Films',
  },
  {
    id: 'Publisher',
    value: 'Bullfrog Films',
  },
  {
    id: 'Release Date',
    value: '2017',
  },
];

function renderDetailsDataItem(item) {
  if (typeof item.value === 'string') {
    return item.value;
  }

  if (typeof item.value === 'number') {
    return item.value;
  }

  return item.value.join(', ');
}

function renderDetailsData(item) {
  return (
    <div className="row" key={`work-data-${item.id}`}>
      <dt className="col-12 col-md-3">{item.id}</dt>
      <dd className="col-12 col-md-9">
        {renderDetailsDataItem(item)}
      </dd>
    </div>
  );
}

function renderDetails() {
  return VideoData.map(item => renderDetailsData(item));
}

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
    };
  }

  componentWillMount() {
    getTitles().then((data) => {
      if (typeof data === 'object') {
        this.setState({
          titles: data.items,
        });
      }
    });
  }

  render() {
    const { slug } = this.props.match.params;
    const { titles } = this.state;

    return (
      <div style={{ paddingTop: '2rem' }}>
        <div className="container-fluid">
          <h1>AWAKE, A Dream from Standing Rock [{slug}]</h1>
          <p>(Cinema Libre Studio), 56 mins</p>
          <TwitterCard
            url="http://"
            title="Haha"
            description="Bla"
            image={SAMPLE_IMAGE_URL}
          />
          <div className="player">
            <div className="row no-gutters">
              <div className="col-12 col-md-8 player__video">
                <div className="player__video--play">
                  <i className="fas fa-play" />
                </div>
                <img className="img-fluid" src={SAMPLE_IMAGE_URL} alt="Sample" />
              </div>
              <div className="col-12 col-md-4">
                <div className="player__channel">
                  <span className="badge badge-pill badge-dark">Channel</span>
                  <ChannelTeaser {...Channel} />
                </div>
                <div>
                  <span className="badge badge-pill badge-light float-right d-none d-md-block">
                    ... Streamable Content Slider, tbc.
                  </span>
                </div>
                <div className="btn-group">
                  <button className="btn btn-primary">
                    <i className="far fa-heart fa-fw" /> Like
                  </button>
                  <button className="btn btn-primary">
                    <i className="far fa-clock fa-fw" /> Watch Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EntityShareComponent />

        <div style={{ background: 'rgb(250, 250, 250)', padding: '2rem 0' }}>
          <div className="container-fluid">
            <h2>About</h2>
            <p>
              {'The nation of Bangladesh is prey to every threat from water known to man. WATER WARS: When Drought, Flood and Greed Collide tells the story of this land at war with not only rising seas, but devastating floods and droughts -- from India\'s dams dumping their excess in the wet season and siphoning off river water in the dry season. And as Bangladesh sees less and less river water during the dry season, it is forced to dig deeper for more wells, encountering arsenic poisoning that is filling hospitals and graveyards.'}
            </p>
            <dl>
              {renderDetails()}
            </dl>
            <h2>Reviews</h2>
            <blockquote className="blockquote">
              {'The best film that we\'ve seen thus far about a crucially important moment in history. The film takes us inside this moment, showing viewers a truly unique perspective on this series of events that have completely changed the playing field for everyone involved in environmental conservation, social justice and indigenous rights.'}
              <div className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </div>
            </blockquote>
          </div>
        </div>
        <hr />
        <PromotedTitles className="normal" items={titles} title="Related Items" subtitle="" link="/" linkTitle="View all" />
      </div>
    );
  }
}

export default Work;
