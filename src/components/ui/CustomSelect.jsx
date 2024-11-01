import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function CustomSelect({ label, options }) {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
      <Select
        labelId={`select-label-${label}`}
        id={`select-${label}`}
        value={selectedValue}
        onChange={handleChange}
        label={label}
        sx={{
          borderRadius: '20px',
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
