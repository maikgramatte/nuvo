import FetchExampleJSONService from './FetchExampleJSONSeverice';

const defaultOptions = {
  key: '',
  scope: 'all',
};

async function getSuggestions(options = defaultOptions) {
  const service = new FetchExampleJSONService();

  return service.fetchAPI('Sample-QuickSearch', options).then(({ data }) => data);
}

export default getSuggestions;
