/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import React from 'react';
import { PageTitle } from '../../Utils/';

const userSettingPathes = [
  {
    path: '/user',
    label: 'Your Profile',
    icon: null,
  },
  {
    path: '/user/edit',
    label: 'Edit Profile',
    icon: null,
  },
  {
    path: '/user/settings',
    label: 'Edit Settings',
    icon: null,
  },
];

const userCommunityPathes = [
  {
    path: '/user/mychannels',
    label: 'My Channels',
    icon: null,
  },
];

function renderLinks(pathes) {
  return (
    <div className="list-group">
      {pathes.map(item => (
        <NavLink exact activeClassName="active" to={item.path} key={item.path} className="list-group-item list-group-item-action">
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default function AccountNavigation(props) {
  return (
    <div className="container-fluid">
      <PageTitle title={props.title} headline />

      <h1>{props.title}</h1>
      <hr />

      <div className="row">
        <div className="col-3">
          {renderLinks(userCommunityPathes)}
          <br />
          <br />
          <h4>Account</h4>
          {renderLinks(userSettingPathes)}
        </div>
        <div className="col">
          {props.children}
        </div>
      </div>
    </div>
  );
}
