import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

function PasswordTextField({ label, confirm = false }, whiteBg) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
  const [matchError, setMatchError] = useState(false)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    if (event.target.value.length < 6) {
      setErrorPassword(true)
    } else {
      setErrorPassword(false)
    }
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
    if (password && event.target.value !== password) {
      setMatchError(true)
    } else {
      setMatchError(false)
    }
  }

  const handlePasswordBlur = () => {
    if (!password || password.length < 6) {
      setErrorPassword(true)
    }
  }

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword) {
      setErrorConfirmPassword(true)
    }
    if (password && confirmPassword !== password) {
      setMatchError(true)
    }
  }

  const toggleShowPassword = () => setShowPassword((prev) => !prev)
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev)

  return (
    <div className='mx-auto max-w-[500px] my-5'>
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
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        type={showPassword ? 'text' : 'password'}
        error={errorPassword}
        helperText={errorPassword ? 'Password must be at least 6 characters long' : ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={toggleShowPassword} edge='end'>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {confirm && (
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
            marginTop: '20px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              backgroundColor: whiteBg ? 'white' : 'transparent',
            },
            '& fieldset': {
              borderWidth: '2px',
            },
          }}
          label='Nhập lại mật khẩu'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          type={showConfirmPassword ? 'text' : 'password'}
          error={errorConfirmPassword || matchError}
          helperText={
            errorConfirmPassword
              ? 'This field is required'
              : matchError
                ? 'Passwords do not match'
                : ''
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={toggleShowConfirmPassword} edge='end'>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </div>
  )
}

export default PasswordTextField
