import React, { memo } from 'react';
// import { Form } from 'react-bootstrap';
import { TextField } from '@mui/material';
const SearchBar = ({ findCharacter }) => {
  return (
    <div className="searchBar">
      <TextField
        className="searchBar__input"
        id="outlined-basic"
        label="Enter a name"
        variant="outlined"
        onChange={findCharacter}
      />
    </div>
  );
};

export default memo(SearchBar);
