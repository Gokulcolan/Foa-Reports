import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// CommonDropdown component
const CommonDropdown = ({ label, options, value, customChange, sx }) => {
  const handleChange = (event) => {
    customChange(event.target.value);
  };

  return (
    <FormControl sx={sx}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={handleChange} label={label}>
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CommonDropdown;

