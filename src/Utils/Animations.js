import React from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';

const duration = 300;

const defaultStyle = {
  transition: `${duration}ms ease-in-out`,
  opacity: 0,
  position: 'relative',
  marginTop: '-1px',
  height: '1px',
  overflow: 'hidden',
};

const transitionStyles = {
  entering: {
    opacity: 0,
    position: 'absolute',
    height: '50px',
    width: '100%',
  },
  entered: {
    opacity: 1,
    position: 'relative',
    height: 'auto',
  },
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state],
      }}
      >
        {children}
      </div>
      )
    }
  </Transition>
);


const defaultStylesOverlay = {
  transition: `${duration}ms ease-in-out`,
  opacity: 0,
  position: 'absolute',
  marginTop: '-1px',
  height: '1px',
  overflow: 'hidden',
};

const transitionStylesOverlay = {
  entering: {
    opacity: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 200,
    background: '#fff',
  },
  entered: {
    opacity: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 200,
    background: 'rgba(255,255,255,0.3)',
  },
};

const Overlay = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        className="transition-overlay"
        style={{
        ...defaultStylesOverlay,
        ...transitionStylesOverlay[state],
      }}
      >
        {children}
      </div>
      )
    }
  </Transition>
);

Fade.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Overlay.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export {
  Fade,
  Overlay,
};
