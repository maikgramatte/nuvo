import React from 'react';
import PropTypes from 'prop-types';
import LoremIpsum from '../../../Components/Dummy/LoremIpsum';

const EditorAbout = ({ name, about }) => (
  <div className="container-fluid">
    <h3>About</h3>
    <p><strong>Editor:</strong> {name}</p>
    <p>{about}</p>
    <LoremIpsum />
    <p>
      <a href="#contact">
        Suggestions? Contact the Editor
      </a>
    </p>
  </div>
);

EditorAbout.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default EditorAbout;
