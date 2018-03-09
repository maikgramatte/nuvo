import React from 'react';
import FooterNavigation from './FooterNavigation';
import API_URL from '../../Config/api-config';

const FooterLogo = '/assets/react-js-icon.png';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4 col-md-1">
            <img src={FooterLogo} alt="FooterLogo" className="img-fluid" />
          </div>
          <div className="col-8 col-md-5">
            <strong>
              Made with React.JS{' '}
              <span className="badge badge-pill badge-light">{process.env.NODE_ENV}</span>
            </strong><br />
            API: <em>{API_URL}</em>
          </div>
          <div className="col-12 col-md-6 text-sm-center text-md-right">
            <FooterNavigation />
          </div>
        </div>
      </div>
    </footer>
  );
}
