import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Typography } from '@mui/material'

import { Button } from '~/components/ui/Button'
import Logo from '~/assets/icons/logo.svg'
import RequiredTextField from '~/components/ui/RequiredTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import { routes } from '~/configs'
import authApi from '~/apis/auth'
import useAuth from '~/stores/useAuth'

export default function LoginModal({ className, children, disabled = false, setUserInfo }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser, login } = useAuth()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = async (email, password) => {
    try {
      const res = await authApi.signIn(email, password)

      setUser(res.user)
      login()

      setUserInfo(res.user)
    } catch (error) {}
  }

  return (
    <React.Fragment>
      <div className={className} onClick={handleClickOpen}>
        {children}
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '12px',
            width: fullScreen ? '100%' : '520px',
            backgroundImage: 'url("/assets/images/bg-login.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingBottom: '24px',
          },
        }}
      >
        <DialogTitle
          id='responsive-dialog-title'
          className='flex items-center justify-end px-6 pb-6 pt-4'
        >
          <CloseIcon onClick={handleClose} className='cursor-pointer text-white' />
        </DialogTitle>
        <DialogContent className='px-10 flex flex-col'>
          <DialogContentText>
            <img
              src={Logo}
              alt='Yummy logo'
              style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
              className='mx-auto'
            />
          </DialogContentText>
          <DialogContentText
            sx={{
              color: 'white',
              fontWeight: '700',
              marginRight: 'auto',
              marginLeft: 'auto',
              textAlign: 'center',
              fontSize: '1.125rem',
              marginBottom: '32px',
            }}
          >
            Xin chào, hãy nhập thông tin bên dưới!
          </DialogContentText>
          {/* <DialogContentText className='flex flex-col'> */}
          <RequiredTextField
            placeholder='Tên đăng nhập'
            className='w-[400px]'
            whiteBg
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          {/* </DialogContentText> */}
          <PasswordTextField
            placeholder='Mật khẩu'
            className='w-[400px] mt-0'
            whiteBg
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Link className='text-end mr-10 mt-[-6px] text-primary font-bold hover:underline'>
            Quên mật khẩu?
          </Link>
        </DialogContent>
        <DialogActions className='flex flex-col gap-4 px-6 pb-8 mt-8'>
          <Button
            onClick={() => {
              handleLogin(email, password)
              handleClose()
            }}
            autoFocus
            disabled={disabled}
            className='text-xl px-12 py-6'
          >
            Đăng nhập
          </Button>
          <span className='text-primary'>
            Bạn chưa có tài khoản?{' '}
            <Link
              onClick={handleClose}
              className='font-bold hover:underline'
              to={routes.CUSTOMER_REGISTER}
            >
              Đăng ký ngay
            </Link>
          </span>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
