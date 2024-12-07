import React from 'react'
import { Tabs, Tab } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

const SideNav = ({ selectedTab, onSelectTab }) => {
  const navItems = [
    { id: 'account', label: 'Tài khoản của tôi', icon: <AccountCircleIcon /> },
    { id: 'change-password', label: 'Đổi mật khẩu', icon: <LockIcon /> },
    { id: 'logout', label: 'Đăng xuất', icon: <ExitToAppIcon /> },
  ]

  return (
    <div className='h-full border-r'>
      <Tabs
        orientation='vertical'
        value={selectedTab}
        onChange={(event, newValue) => onSelectTab(newValue)}
        aria-label='side navigation'
        sx={{
          paddingTop: '32px',
          '& .MuiTab-root': {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'left',
            minHeight: '56px',
            padding: '0px 0px 0px 56px',
            fontSize: '16px',
            fontFamily: 'Roboto, sans-serif',
            color: '#333333',
            transition: 'background-color 0.3s, color 0.3s',
          },
          '& .MuiTab-wrapper': {
            flexDirection: 'row',
          },
          '& .MuiTabs-indicator': {
            width: '4px',
            backgroundColor: '#7D0600',
          },
          '& .Mui-selected': {
            backgroundColor: '#fdecea',
            color: '#7D0600',
            fontWeight: 'bold',
          },
          '& .MuiTab-root:hover': {
            backgroundColor: '#fef4f0',
          },
          '& .MuiTab-iconWrapper': {
            marginRight: '0',
          },
        }}
      >
        {navItems.map((item) => (
          <Tab
            key={item.id}
            value={item.id}
            label={item.label}
            icon={item.icon}
            iconPosition='start'
          />
        ))}
      </Tabs>
    </div>
  )
}

export default SideNav
