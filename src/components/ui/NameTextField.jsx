import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function NameTextField({ label }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    if (error) setError(false)
  }

  const handleBlur = () => {
    const nameRegex =
      /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚ]{1}[a-zàáâãèéêìíòóôõùú]*)(\s[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚ]{1}[a-zàáâãèéêìíòóôõùú]*)*$/
    if (!nameRegex.test(value.trim())) {
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
        helperText={
          error
            ? 'This field is required and must be a valid name (each word starts with a capital letter)'
            : ''
        }
        inputProps={{ inputMode: 'text' }}
      />
    </div>
  )
}

export default NameTextField
