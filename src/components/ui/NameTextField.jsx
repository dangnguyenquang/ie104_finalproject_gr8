import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function NameTextField({ label, className, whiteBg, value, handleChange }) {
  const [error, setError] = useState(false)

  const handleBlur = () => {
    const nameRegex = /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚ][a-zàáâãèéêìíòóôõùú]*\s?)+$/
    if (!nameRegex.test(value.trim())) {
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
          '& fieldset': {
            borderWidth: '2px',
          },
        }}
        label={label}
        value={value}
        onChange={(e) => {
          handleChange(e)
          if (error) setError(false)
        }}
        onBlur={handleBlur}
        required
        error={error}
        helperText={
          error
            ? 'Trường này là bắt buộc và phải là tên hợp lệ (mỗi từ bắt đầu bằng chữ cái hoa)'
            : ''
        }
        inputProps={{ inputMode: 'text' }}
      />
    </div>
  )
}

export default NameTextField
