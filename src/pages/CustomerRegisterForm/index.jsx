import * as React from 'react'
import { Button } from '~/components/ui/Button'
import RequiredTextField from '~/components/ui/RequiredTextField'
import NumericTextField from '~/components/ui/NumericTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import TextField from '@mui/material/TextField'
import EmailTextField from '~/components/ui/EmailTextField'
import NameTextField from '~/components/ui/NameTextField'

const CustomerRegisterForm = () => {
  return (
    <div className='w-full justify-center'>
      {/* Đăng kí tài khoản */}
      <div className="block text-center text-primary text-6xl font-medium font-['Oswald'] uppercase leading-[100px] my-10">
        Đăng kí tài khoản
      </div>

      {/* Họ và tên */}
      <NameTextField label='Họ và tên' />

      {/* Email */}
      <EmailTextField label='Email' />

      {/* Số điện thoại */}
      <NumericTextField label='Số điện thoại' />

      {/* Địa chỉ */}
      <RequiredTextField label='Địa chỉ' />

      {/* Tên tài khoản */}
      <RequiredTextField label='Tên tài khoản' />

      {/* Mật khẩu */}
      <PasswordTextField label='Mật khẩu' confirm='true' />

      <div className='flex items-center justify-center gap-24 my-5'>
        <Button
          variant='outline'
          className="bg-primary hover:bg-primary/80 text-base font-normal font-['Roboto'] leading-[30px]"
        >
          Đăng ký
        </Button>

        <div>
          Bạn đã có tài khoản?
          <Button
            variant='none'
          >Đăng nhập ngay</Button>
        </div>
      </div>
    </div>
  )
}

export default CustomerRegisterForm
