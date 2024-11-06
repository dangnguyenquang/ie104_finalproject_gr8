import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function NumericTextField({ label }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newValue = event.target.value
    if (/^\d*$/.test(newValue)) {
      setValue(newValue)
      if (error) setError(false)
    }
  }

  const handleBlur = () => {
    if (value.trim() === '') {
      setError(true)
    }
  }

  return (
    <div className='mx-auto max-w-[500px] my-5'>
      <TextField
        sx={{
          margin: 'auto',
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
          },
        }}
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={error}
        helperText={error ? 'This field is required' : ''}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
    </div>
  )
}

export default NumericTextField
