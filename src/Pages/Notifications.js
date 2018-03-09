import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';

/**
 * Documentation can be found:
 * https://github.com/minhtranite/react-notifications
 */

class NotificationsSample extends Component {
  createNotification = (type, title, message) => {
    switch (type) {
      case 'info':
        NotificationManager.info(title, message);
        break;
      case 'success':
        NotificationManager.success(title, message);
        break;
      case 'warning':
        NotificationManager.warning(title, message, 3000);
        break;
      case 'error':
        NotificationManager.error(title, message, 5000, () => {
          // alert('callback');
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Notification System</h1>
        <p>The Notification system is active globaly and can be called from everywhere.</p>
        <p>This is using the GH Repo:
          <a rel="noopener noreferrer" href="https://github.com/minhtranite/react-notifications" target="_blank">https://github.com/minhtranite/react-notifications</a>.
        </p>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button className="btn btn-sm btn-outline-primary" onClick={() => this.createNotification('success', 'Thanks', 'This is a global success message!')}>
            Show Success message
          </button>

          <button className="btn btn-sm btn-outline-primary btn-danger" onClick={() => this.createNotification('error', 'Error', 'This is a global error message!')}>
            Show error message
          </button>
        </div>
      </div>
    );
  }
}

export default NotificationsSample;
