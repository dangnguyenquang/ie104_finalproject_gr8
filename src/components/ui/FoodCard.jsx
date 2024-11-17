import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate'

import { Button } from './Button'

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number)
}

const FoodCard = ({ image, rating, restaurant, name, address, price, id }) => {
  return (
    <div className='group rounded-[20px] w-[275px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] cursor-pointer relative hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <div className='rounded-t-[20px] w-full h-[246px] overflow-hidden group relative'>
        <div
          className='w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110'
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className='absolute top-2 right-2 flex items-center justify-center text-[15px] font-medium gap-1 px-[5px] py-[3px] rounded-3xl min-w-[70px] bg-white bg-opacity-80 shadow-md'>
          <p>{rating}/5</p>
          <StarRateIcon className='text-yellow-500' sx={{ fontSize: '18px' }} />
        </div>
        <div className='absolute inset-0 bottom-2 flex justify-center items-end'>
          <div className='text-center mx-auto text-[15px] font-medium px-[15px] py-[3px] rounded-3xl w-fit max-w-[200px] bg-white bg-opacity-80 shadow-md'>
            {restaurant}
          </div>
        </div>
      </div>
      <div className='bg-[#F0F1F2] pt-5 pb-4 px-4 w-full text-center flex flex-col rounded-b-3xl text-primaryText h-[180px]'>
        <p className='text-[25px] font-semibold mx-auto mb-0.5 leading-8'>{name}</p>
        <p className='text-[12px] font-[300] mx-auto max-w-[180px] text-center mb-5'>{address}</p>
        <div className='flex mt-auto justify-between items-center'>
          <div className='flex gap-1 items-end'>
            <span className='font-bold text-[20px]'>{formatNumber(price)}</span>
            <span className='text-[16px]'>VND</span>
          </div>
          <Button variant='secondary' className='py-4 px-3' size='sm'>
            Đi tới quán
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
