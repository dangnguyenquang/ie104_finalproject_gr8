import React from 'react'
import TextField from '@mui/material/TextField'

function TimeInput({ label, name, value, handleChange }) {
  return (
    <div className='mx-auto max-w-[500px] my-5'>
      <TextField
        sx={{
          margin: 'auto',
          width: '230px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px',
            backgroundColor: 'white',
          },
          '& fieldset': {
            borderWidth: '2px',
          },
        }}
        label={label}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
        type='time'
        InputLabelProps={{ shrink: true }}
      />
    </div>
  )
}

export default TimeInput
