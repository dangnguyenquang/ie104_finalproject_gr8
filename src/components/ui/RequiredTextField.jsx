import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function RequiredTextField({ label, className, placeholder, whiteBg }) {
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
    <div className={`mx-auto max-w-[500px] my-5 ${className}`}>
      <TextField
        sx={{
          margin: 'auto',
          width: '100%',
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            backgroundColor: whiteBg ? 'white' : 'transparent',
          },
        }}
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={error}
        placeholder={placeholder}
        helperText={error ? 'This field is required' : ''}
      />
    </div>
  )
}

export default RequiredTextField
