import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function RequiredTextField({ label }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value)
    if (event.target.value) {
      setError(false)
    }
  }

  const handleBlur = () => {
    if (!value) {
      setError(true)
    }
  }

  return (
    <div className='mx-auto w-[500px] my-5'>
      <TextField
        sx={{
          margin: 'auto',
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            '&:hover fieldset': {
              borderColor: '#7D0600',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7D0600',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#7D0600',
          },
        }}
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={error}
        helperText={error ? 'This field is required' : ''}
      />
    </div>
  )
}

export default RequiredTextField
