// API ENV Configuration
// Example:
// https://daveceddia.com/multiple-environments-with-react/

let backendHost;
const hostname = window && window.location && window.location.hostname;

if (hostname !== 'localhost') {
  backendHost = `https://${hostname}`;
  // } else if(hostname === 'staging.realsite.com') {
  //  backendHost = 'https://staging.api.realsite.com';
  // } else if(/^qa/.test(hostname)) {
  //  backendHost = `https://api.${hostname}`;
} else {
  backendHost = `http://${hostname}:3000`;
  // backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';
}

export default `${backendHost}/data/`;
