import React from 'react';
import Loremipsum from '../Components/Dummy/LoremIpsum';
import Container from '../Components/Container';

export default () => (
  <Container title="About" className="">
    <div className="page-head">
      <h1 className="container-fluid">About</h1>
    </div>
    <div className="container-fluid">
      <Loremipsum paragraphs={10} />
    </div>
  </Container>
);
