import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '~/components/ui/Button'
import PasswordTextField from '~/components/ui/PasswordTextField'

const ChangePasswordModal = ({ open, onClose }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [matchError, setMatchError] = useState(false)

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      setMatchError(true)
      return
    }
    console.log('Old Password:', oldPassword)
    console.log('New Password:', newPassword)
    onClose()
  }

  const handleConfirmPasswordChange = (value) => {
    setConfirmNewPassword(value)
    if (newPassword === value) {
      setMatchError(false)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='change-password-dialog-title'
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '12px',
          width: '400px',
        },
      }}
    >
      <DialogTitle
        id='change-password-dialog-title'
        className='flex justify-between items-center my-5'
      >
        <span className='text-secondary text-2xl uppercase'>Đổi mật khẩu</span>
        <CloseIcon onClick={onClose} className='cursor-pointer' />
      </DialogTitle>
      <DialogContent>
        <PasswordTextField
          label='Mật khẩu cũ'
          value={oldPassword}
          handleChange={(e) => setOldPassword(e.target.value)}
        />
        <PasswordTextField
          label='Mật khẩu mới'
          confirm={true}
          value={newPassword}
          handleChange={(e) => setNewPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions className='mx-auto mb-5'>
        <Button
          onClick={handleChangePassword}
          className='w-32 h-10 bg-primary text-white rounded-full'
        >
          Đổi mật khẩu
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ChangePasswordModal
