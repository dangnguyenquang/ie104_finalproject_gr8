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

import { Button } from '~/components/ui/Button'
import Logo from '~/assets/icons/logo.svg'
import RequiredTextField from '~/components/ui/RequiredTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import { routes } from '~/configs'

export default function LoginModal({
  title,
  content,
  className,
  children,
  disabled = false,
  action,
}) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
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
            backgroundImage: 'url("src/assets/images/bg-login.png")',
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
        <DialogContent className='px-10'>
          <DialogContentText className='w-full justify-center text-black flex flex-col gap-2'>
            <img
              src={Logo}
              alt='Yummy logo'
              style={{ width: '200px', height: 'auto' }}
              className='mx-auto'
            />
            <p className='text-white font-bold mx-auto text-lg mb-8'>
              Xin chào, hãy nhập thông tin bên dưới!
            </p>
          </DialogContentText>
          <DialogContentText className='flex flex-col'>
            <RequiredTextField placeholder='Tên đăng nhập' className='w-[400px]' whiteBg />
            <PasswordTextField placeholder='Mật khẩu' className='w-[400px] mt-0' whiteBg />
            <Link className='text-end mr-10 mt-[-6px] text-primary font-bold hover:underline'>
              Quên mật khẩu?
            </Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='flex flex-col gap-4 px-6 pb-8 mt-8'>
          <Button
            onClick={() => {
              action()
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
