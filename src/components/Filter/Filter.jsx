import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <Typography variant="body1" gutterBottom>
        Find contacts by name:
      </Typography>
      <TextField
        type="text"
        onChange={handleFilterChange}
        placeholder="search..."
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default Filter;
