import { useState } from 'react'
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

const currencies = [
  {
    value: 'restaurant',
    label: 'Tìm theo quán',
  },
  {
    value: 'food',
    label: 'Tìm theo món ăn',
  },
]

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className='w-full flex'>
      <TextField
        value={inputValue}
        onChange={handleChange}
        fullWidth
        placeholder='Tìm kiếm món ăn hoặc tên quán ăn'
        className='bg-white rounded-l-full outline-none pl-2'
        sx={{
          '& .MuiOutlinedInput-root': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '30px 0 0 30px',
            '&.Mui-focused fieldset': {
              borderColor: '#A64C46',
            },
            '& .MuiInputBase-input': {
              paddingLeft: '30px',
            },
          },
        }}
      />
      <TextField
        id='outlined-select-currency'
        select
        defaultValue='restaurant'
        className='bg-secondary'
        sx={{
          '& .MuiOutlinedInput-root': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '0 30px 30px 0',
            minWidth: '175px',
            backgroundColor: '#F3BE12',
            '&.Mui-focused fieldset': {
              borderColor: '#A64C46',
            },
          },
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value} className='min-w-[100px]'>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}

export default SearchBar
