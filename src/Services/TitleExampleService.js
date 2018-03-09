import FetchExampleJSONService from './FetchExampleJSONSeverice';

const defaultOptions = {
  page: 0,
  limit: 20,
};

async function getTitles(options = defaultOptions) {
  const service = new FetchExampleJSONService();

  return service.fetchAPI('Sample-titles', options).then(({ data }) => data);
}

export default getTitles;
