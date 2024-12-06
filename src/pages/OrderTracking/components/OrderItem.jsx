import React from 'react'
import { FaStar } from 'react-icons/fa'

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number)
}

const OrderItem = ({ imageUrl, title, quantity, price, starMedium }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (v, i) => (
      <FaStar key={i} color={i < rating ? '#FFD700' : '#E0E0E0'} />
    ))
  }

  return (
    <div className='flex flex-col sm:flex-row p-2 space-x-4 items-center mb-4 rounded-lg border'>
      <img
        src={imageUrl}
        alt={title}
        className='flex-none w-full sm:w-48 h-36 rounded-[20px] object-cover'
      />
      <div className='flex-grow'>
        <div className='text-xl font-bold mb-1'>{title}</div>
        <div className='text-lg text-primaryText mb-1'>Giá: {formatNumber(price)} VND</div>
        <div className='text-lg text-primaryText mb-1'>Số lượng: {quantity}</div>
        <div className='flex items-center text-lg'>{renderStars(starMedium)}</div>
      </div>
    </div>
  )
}

export default OrderItem
