import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Components/Container';

const styles = {
  textAlign: 'center',
  fontSize: '2rem',
  padding: '4rem',
};

export default () => (
  <Container title="Nuvo Home" style={styles}>
    <div style={styles}>
      Welcome to NuVo
    </div>
    <ul>
      <li>
        <NavLink to="/notifications">Notification-Example</NavLink>
      </li>
    </ul>
  </Container>
);
