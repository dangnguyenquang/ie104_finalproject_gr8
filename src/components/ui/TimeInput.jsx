import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function TimeInput({ label }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value)
    if (event.target.value) {
      setError(false)
    }
  }

  const handleBlur = () => {
    if (value === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      helperText={error ? 'This field is required' : ''}
      type='time'
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        margin: 'auto',
        width: '100%',
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',
        },
        '& fieldset': {
          borderWidth: '2px',
        },
      }}
    />
  )
}

export default TimeInput
