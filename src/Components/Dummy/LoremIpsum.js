import React from 'react';
import PropTypes from 'prop-types';

const Text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';

export default function LoremIpsum({ paragraphs }) {
  const items = [];
  for (let i = 0; i < paragraphs; i += 1) {
    items.push(<p key={i.toString()}>{Text}</p>);
  }

  return (
    <div>
      {items}
    </div>
  );
}

LoremIpsum.propTypes = {
  paragraphs: PropTypes.number,
};

LoremIpsum.defaultProps = {
  paragraphs: 3,
};
