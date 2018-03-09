import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterLinks from '../../Config/FooterLinks';

const LinksRendered = FooterLinks.map(item => (
  <li className="list-inline-item" key={item.label}>
    <NavLink to={item.url}>
      {item.label}
    </NavLink>
  </li>));

export default () => (
  <ul className="list-inline">
    {LinksRendered}
  </ul>
);
