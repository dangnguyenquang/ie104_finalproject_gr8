import React from 'react'
import { Tabs, Tab } from '@mui/material'

const Navigation = ({ labels, value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant='scrollable'
      scrollButtons='auto'
      aria-label='navigation tabs'
      sx={{
        backgroundColor: '#fdf8e7', // Màu nền cho navigation
        '& .MuiTab-root': {
          width: '200px',
          fontSize: { xs: 12, md: 14 },
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'medium',
          color: '#333333', // Màu chữ mặc định
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#7D0600', // Màu sắc đường gạch dưới
        },
      }}
    >
      {labels.map((label, index) => (
        <Tab
          key={`tab-${index}`}
          label={label}
          sx={{
            '&.Mui-selected': {
              color: '#7D0600', // Màu chữ khi tab được chọn
            },
          }}
        />
      ))}
    </Tabs>
  )
}

export default Navigation
