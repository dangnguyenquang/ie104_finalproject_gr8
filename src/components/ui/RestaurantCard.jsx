import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate'

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number)
}

const RestaurantCard = ({ image, rating, restaurant, address, id }) => {
  return (
    <div className='rounded-[20px] w-[260px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer mb-2'>
      <div
        className='rounded-t-[20px] w-full h-[246px] py-3 px-5 flex flex-col justify-between'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='justify-center items-center ml-auto text-[15px] font-medium flex gap-1 px-[5px] py-[3px] rounded-3xl min-w-[70px] bg-white bg-opacity-80'>
          <p>{rating}/5</p>
          <StarRateIcon className='text-yellow-500' sx={{ fontSize: '18px' }} />
        </div>
      </div>
      <div className='bg-[#F0F1F2] py-3 px-4 w-full text-center flex flex-col rounded-b-3xl text-primaryText h-[90px]'>
        <p className='text-[25px] font-semibold mx-auto mb-2'>{restaurant}</p>
        <p className='text-[12px] font-[300] mx-auto max-w-[200px] text-center mb-5'>{address}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
