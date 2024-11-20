import React from 'react'
import { Tabs, Tab, Box } from '@mui/material'

const Navigation = ({ labels, value, onChange }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Tabs
        value={value}
        onChange={onChange}
        variant='scrollable'
        scrollButtons='auto'
        aria-label='navigation tabs'
        sx={{
          backgroundColor: '#fdf8e7',
          width: { xs: '100%', md: 'auto' },
          '& .MuiTab-root': {
            minWidth: { xs: 'auto', sm: 'auto', md: '200px' },
            fontSize: { xs: 10, sm: 12, md: 14 },
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'medium',
            color: '#333333',
            padding: { xs: '6px 8px', sm: '10px 12px', md: '12px 16px' },
            flex: { xs: 1, sm: 1, md: 'initial' },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#7D0600',
          },
          '& .MuiTabs-flexContainer': {
            justifyContent: { xs: 'space-around', md: 'center' },
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          },
        }}
      >
        {labels.map((label, index) => (
          <Tab
            key={`tab-${index}`}
            label={label}
            sx={{
              '&.Mui-selected': {
                color: '#7D0600',
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default Navigation
