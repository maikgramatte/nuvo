/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import ReactGA from 'react-ga';

import { APP_STATE_PAGEVIEW } from '../Actions/ActionConstants';

const styles = {
  label: 'color: #1da1f2; font-weight: bold;',
};

const GA_ID = process.env.REACT_APP_GTM_ID;
const LOG_ENABLED = process.env.REACT_APP_LOGGING;

ReactGA.initialize(GA_ID);

function logAction(action) {
  console.log('%c GA-PV:', styles.label, action);
}

function logPageView() {
  setTimeout(() => {
    if (LOG_ENABLED) {
      logAction(`${window.location.pathname + window.location.search} [${window.document.title}]`);
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, 200);
}

setTimeout(() => {
  logPageView();
}, 500);

const GaLogger = store => next => action => {
  if (action.type === APP_STATE_PAGEVIEW) {
    logPageView();
  }
  next(action);
};

export default GaLogger;
