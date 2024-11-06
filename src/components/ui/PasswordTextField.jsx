import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

function PasswordTextField({ label, confirm = false, className, placeholder, whiteBg }) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
  const [matchError, setMatchError] = useState(false)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    if (event.target.value) {
      setErrorPassword(false)
    }

    if (event.target.value.length < 6) {
      setErrorPassword(true)
    } else {
      setErrorPassword(false)
    }
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
    if (event.target.value) {
      setErrorConfirmPassword(false)
    }
    if (password && event.target.value !== password) {
      setMatchError(true)
    } else {
      setMatchError(false)
    }
  }

  const handlePasswordBlur = () => {
    if (!password) {
      setErrorPassword(true)
    } else if (password.length < 6) {
      setErrorPassword(true)
    }
  }

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword) {
      setErrorConfirmPassword(true)
    }
    if (password && confirmPassword !== password) {
      setMatchError(true)
    } else {
      setMatchError(false)
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
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        placeholder={placeholder}
        type='password'
        error={errorPassword}
        helperText={errorPassword ? 'Password must be at least 6 characters long' : ''}
      />

      {confirm && (
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
            marginTop: '20px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
          label='Nhập lại mật khẩu'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          type='password'
          placeholder={placeholder}
          error={errorConfirmPassword || matchError}
          helperText={
            errorConfirmPassword
              ? 'This field is required'
              : matchError
                ? 'Passwords do not match'
                : ''
          }
        />
      )}
    </div>
  )
}

export default PasswordTextField