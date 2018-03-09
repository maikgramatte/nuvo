import Loadable from 'react-loadable';
import ComponentLoader from './ComponentLoader';

const LoadableDefaultOptions = {
  loading: ComponentLoader,
  delay: 200,
  timeout: 10,
};

function LoadableComponent(opts) {
  return Loadable(Object.assign({
    ...LoadableDefaultOptions,
    modules: ['./MyComponent'],
  }, opts));
}

export default LoadableComponent;

export {
  LoadableDefaultOptions,
  Loadable,
};
