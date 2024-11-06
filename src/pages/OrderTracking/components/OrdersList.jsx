import React from 'react'
import OrderCard from './OrderCard'

const OrdersList = ({ orders }) => {
  return (
    <div className='flex flex-col items-center mb-10'>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  )
}

export default OrdersList
