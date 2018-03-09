import React from 'react';

function PagerExample() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#p" tabIndex="-1">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#1">1</a></li>
        <li className="page-item"><a className="page-link" href="#2">2</a></li>
        <li className="page-item"><a className="page-link" href="#3">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#n">Next</a>
        </li>
      </ul>
    </nav>
  );
}

export default PagerExample;
