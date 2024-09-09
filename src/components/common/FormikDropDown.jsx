import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';

const FormikDropdown = ({
  formik,
  name,
  label,
  options,
  required = false,
  fullWidth = true,
  margin = 'normal',
  variant = 'outlined',
  ...props
}) => {
  const isError = formik.touched[name] && Boolean(formik.errors[name]);

  return (
    <FormControl
      variant={variant}
      fullWidth={fullWidth}
      margin={margin}
      required={required}
      error={isError}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {isError && <FormHelperText>{formik.errors[name]}</FormHelperText>}
    </FormControl>
  );
};

export default FormikDropdown;
