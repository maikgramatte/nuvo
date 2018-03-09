import axios from 'axios';
import queryString from 'query-string';
import store from '../Store';
import API_FETCH_URL from '../Config/api-config';

// Aplly a custom delay of the JSON-fetch
const API_FETCH_CUSTOM_DELAY = 500;

class FetchExampleJSONService {
  constructor() {
    let state = store.getState();
    this.token = state.authentication.token;

    store.subscribe(() => {
      state = store.getState();
      this.token = state.authentication.token;
    });
  }

  async fetch(type) {
    axios.defaults.headers.common.Authorization = this.auth;

    return axios.get(`${API_FETCH_URL}${type}.json`)
      .then(value => Promise.resolve(value))
      .then(value => new Promise((resolve) => {
        setTimeout(() => {
          // at this point we are going to check the feedback from the server
          resolve(value);
        }, API_FETCH_CUSTOM_DELAY);
      }));
  }

  async fetchAPI(type, options = []) {
    axios.defaults.headers.common.Authorization = this.auth;

    const Options = queryString.stringify(options);
    const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}?api=${type}.json&${Options}`);
    return response;
  }

  test404() {
    return this.fetch('404');
  }

  getMyChannels() {
    return this.fetch('MyChannels');
  }

  getChannels() {
    return this.fetch('Channels');
  }

  getChannelbySlug(slug) {
    return this.fetch(`channels/channel-${slug}`);
  }
}

export default FetchExampleJSONService;
