import queryString from 'query-string';

const defaultParams = {
  ff: [],
  keyword: '',
  page: 0,
  sort: 'title',
};

function parseFacetString(facet) {
  const splitted = facet.split(':', 2);
  if (splitted[1]) {
    return ({
      facet: splitted[0],
      label: splitted[1],
    });
  }

  return false;
}

function SearchParamsService(location, match) {
  const params = { ...defaultParams };

  if (match.params.keyword) {
    params.keyword = match.params.keyword;
  }

  const parsed = queryString.parse(location.search);
  if (parsed.sort) {
    params.sort = parsed.sort;
  }

  if (parsed.page) {
    params.page = parsed.page;
  }
  if (parsed.ff) {
    const facets = [];
    if (typeof parsed.ff === 'string') {
      const test = parseFacetString(parsed.ff);
      if (test) {
        facets.push(test);
      }
    } else {
      for (let x = 0; x < parsed.ff.length; x += 1) {
        const test = parseFacetString(parsed.ff[x]);
        if (test) {
          facets.push(test);
        }
      }
    }
    params.ff = facets;
  }

  return params;
}

function facetsToUrlQuery(facets) {
  const urlFacets = [];
  for (let x = 0; x < facets.length; x += 1) {
    urlFacets.push(`${facets[x].facet}:${facets[x].label}`);
  }

  return urlFacets;
}

function buildUrl(url, params = {}) {
  if (params === {}) {
    return url;
  }

  const submittedParams = {};
  if (params.page !== defaultParams.page) {
    submittedParams.page = params.page;
  }

  if (params.sort !== defaultParams.sort) {
    submittedParams.sort = params.sort;
  }

  if (params.ff !== defaultParams.ff) {
    submittedParams.ff = facetsToUrlQuery(params.ff);
  }

  return `${url}?${queryString.stringify(submittedParams)}`;
}

export {
  defaultParams,
  facetsToUrlQuery,
  buildUrl,
};

export default SearchParamsService;
