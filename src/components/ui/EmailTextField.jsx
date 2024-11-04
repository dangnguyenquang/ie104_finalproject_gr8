import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function EmailTextField({ label }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    if (error) setError(false)
  }

  const handleBlur = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    if (!emailPattern.test(value)) {
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
          '& fieldset': {
            borderWidth: '2px',
          },
        }}
        label={label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        error={error}
        helperText={error ? 'Please enter a valid email address' : ''}
      />
    </div>
  )
}

export default EmailTextField
