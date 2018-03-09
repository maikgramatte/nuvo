import React from 'react';
import Container from '../Components/Container';

export default function Page404() {
  return (
    <Container title="Page not Found" className="">
      <div className="page-head">
        <div className="container-fluid">
          <h1 className="page-title display-5">Page not Found (404)</h1>
        </div>
      </div>
      <div className="container-fluid">
        <p>The page you have requested was not found.</p>
      </div>
    </Container>
  );
}
