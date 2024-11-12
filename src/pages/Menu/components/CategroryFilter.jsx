import * as React from 'react'
import { useState } from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const Categrories = [
  'Đồ uống',
  'Thức ăn nhanh',
  'Món Á',
  'Cơm',
  'Trà sữa',
  'Món chay',
  'Bún phở',
  'Ăn vặt',
]

const CategroryFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const handleSelectCategories = (event) => {
    const isChecked = event.target.checked
    setSelectedCategories((prevSelected) => {
      if (isChecked) {
        return [...prevSelected, event.target.value]
      } else {
        return prevSelected.filter((category) => category !== event.target.value)
      }
    })
  }
  return (
    <div>
      <div className='text-[20px] text-primaryText font-bold'>Danh mục món ăn</div>
      <FormGroup>
        {Categrories.map((category, index) => (
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: '#7D0600',
                  },
                }}
              />
            }
            onChange={handleSelectCategories}
            value={category}
            key={category}
            label={category}
            className='text-primaryText'
          />
        ))}
      </FormGroup>
    </div>
  )
}
export default CategroryFilter
