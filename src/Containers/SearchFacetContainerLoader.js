import React from 'react';
import Loadable from 'react-loadable';
import ComponentLoader from '../Utils/ComponentLoader';

const LoadableComponent = Loadable({
  loader: () => import('./SearchFacetContainer'),
  loading: ComponentLoader,
  render(loaded, props) {
    const Component = loaded.default;
    return <Component {...props} />;
  },
});

export default LoadableComponent;
