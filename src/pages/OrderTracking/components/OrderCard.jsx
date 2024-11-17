import React, { useState } from 'react'
import { Button } from '~/components/ui/Button'
import { Chip } from '@mui/material'
import OrderItem from './OrderItem'
import ReviewModal from '~/components/Layout/Components/_components/ReviewModal'

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number)
}

const OrderCard = ({ order }) => {
  const [isReviewOpen, setReviewOpen] = useState(false)

  const handleReviewOpen = () => setReviewOpen(true)
  const handleReviewClose = () => setReviewOpen(false)

  const statusMap = {
    pending: { label: 'Chờ xác nhận', bgColor: '#ff9800', actions: ['Huỷ đơn'] },
    'in-progress': { label: 'Chờ vận chuyển', bgColor: '#4caf50', actions: [] },
    completed: { label: 'Hoàn thành', bgColor: '#2196f3', actions: ['Đánh giá'] },
    canceled: { label: 'Đã hủy', bgColor: '#f44336', actions: [] },
  }

  const chipData = statusMap[order.status] || {
    label: 'Không xác định',
    bgColor: '#000000',
    actions: [],
  } // Default (black)

  return (
    <div className='p-4 border rounded-lg w-[600px] my-3 relative bg-white'>
      <div className='absolute top-4 right-4'>
        <Chip
          label={chipData.label}
          style={{ backgroundColor: chipData.bgColor, color: '#fff' }}
          className='w-32 h-10 text-center text-sm font-bold leading-[28px]'
        />
      </div>

      <h2 className='text-xl font-semibold mb-4'>{order.name}</h2>
      <div className='space-y-3'>
        {order.items.map((item) => (
          <OrderItem
            key={item._id}
            imageUrl={item.imageUrl.url}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            starMedium={item.starMedium}
          />
        ))}
      </div>
      <div className='flex justify-end items-center mt-4'>
        <p className='text-lg font-semibold'>Tổng tiền: {formatNumber(order.totalPrice)} VND</p>
      </div>
      <div className='flex justify-end space-x-3 mt-3'>
        {chipData.actions.includes('Đánh giá') && (
          <Button
            variant='outline'
            className='w-32 h-10 bg-primary hover:bg-primary/80 text-center text-sm font-bold leading-[28px]'
            onClick={handleReviewOpen}
          >
            Đánh giá
          </Button>
        )}
        {chipData.actions.includes('Huỷ đơn') && (
          <Button
            variant='outline'
            className='w-32 h-10 bg-[#ff0000] hover:bg-[#ff0000]/80 text-center text-white text-sm font-bold leading-[28px]'
          >
            Huỷ đơn
          </Button>
        )}
        <Button
          variant='outline'
          className='w-32 h-10 bg-[#c8c8c8] hover:bg-[#c8c8c8]/80 text-center text-primaryText text-sm font-bold leading-[28px]'
        >
          Quay lại quán này
        </Button>
      </div>

      {/* Review Modal */}
      <ReviewModal
        open={isReviewOpen}
        onClose={handleReviewClose}
        items={order.items} // Truyền danh sách món vào modal
      />
    </div>
  )
}

export default OrderCard