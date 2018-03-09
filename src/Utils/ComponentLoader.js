
import React, { Component } from 'react';
import LoadingIndicator from './LoadingIndicator';

function reloadPage() {
  window.location.reload(true);
}

// eslint-disable-next-line react/prefer-stateless-function
class ComponentLoader extends Component {
  render() {
    // eslint-disable-next-line
    const { isLoading, timedOut, pastDelay, error } = this.props;

    if (isLoading) {
      if (timedOut) {
        return null;
        // return <div>Loader timed out!</div>;
      } else if (pastDelay) {
        return <LoadingIndicator height={400} />;
      }
      return null;
    } else if (error) {
      return (
        <div className="text-center">
          <h1>Failed to load</h1>
          <p><code>Error! Component failed to load.</code> Please try to reload the page.</p>
          <p>
            <button onClick={reloadPage()}>Refresh page</button>
          </p>
        </div>
      );
    }

    return null;
  }
}

export default ComponentLoader;
