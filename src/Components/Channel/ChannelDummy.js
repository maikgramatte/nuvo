import React from 'react';
import PlaceHolder from '../../Utils/placeholderImage.png';

export default function ChannelDummy() {
  return (
    <div className="row align-items-center dummy">
      <div className="col-4">
        <img
          className="img-fluid img-thumbnail rounded-circle"
          src={PlaceHolder}
          alt="Placeholder"
        />
      </div>
      <div className="col">
        <h4 className="card-title text-muted">▮▮▮▮▮▮▮▮▮▮▮▮</h4>
        <p className="small text-muted">▮▮▮▮▮</p>
      </div>
    </div>
  );
}
