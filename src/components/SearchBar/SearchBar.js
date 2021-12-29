import React from 'react';

import { Form } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form>
      <Form.Control
        className="searchBar__input"
        size="lg"
        type="text"
        placeholder="Find character"
      />
    </Form>
  );
};

export default SearchBar;
