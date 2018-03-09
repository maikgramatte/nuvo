import React from 'react';
import LazyLoad from 'react-lazyload';
import { PageTitle } from '../Utils/';

const ExampleImages = [
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
  'https://picsum.photos/200/200/?random',
];

export default () => (
  <div className="container-fluid">
    <PageTitle title="Lazy Image Loading" />
    <h1>Lazy Loading of Images and other Components</h1>
    <p>This pages is lazy loading Components/Images on the page.</p>

    <div className="card-columns">
      {ExampleImages.map((object, i) => (
        <LazyLoad height={200} key={i.toString()}>
          <div className="card">
            <img className="card-img-top" src={`${object}&rand=${i}`} alt={`${object}&rand=${i}`} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
                This content is a little bit longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </LazyLoad>
      ))}
    </div>
  </div>
);
