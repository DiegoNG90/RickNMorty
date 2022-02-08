import React from 'react';
import { Pagination } from 'react-bootstrap';
import './paginator.css';

const Paginator = ({ data, selectPage, activePage, term }) => {
  const { info } = data || [];

  let items = [];
  for (let number = 1; number <= info?.pages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => selectPage(number, term)}
        key={number}
        active={number === activePage}
        className="paginator__item"
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: '2rem' }}
    >
      <Pagination className="d-flex flex-wrap" size="lg">
        {items}
      </Pagination>
      <br />
    </div>
  );
};

export default Paginator;
