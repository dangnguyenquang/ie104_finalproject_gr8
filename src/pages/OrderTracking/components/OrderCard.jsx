import React, { useState } from 'react';
import { Button } from '~/components/ui/Button';
import OrderItem from './OrderItem';
import ReviewModal from '~/components/Layout/Components/_components/ReviewModal';

const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

const OrderCard = ({ order }) => {
  const [isReviewOpen, setReviewOpen] = useState(false);

  const handleReviewOpen = () => setReviewOpen(true);
  const handleReviewClose = () => setReviewOpen(false);

  return (
    <div className='p-4 border rounded-lg w-[600px] my-3 relative bg-white'>
      <div className='absolute top-2 right-4'>
        <Button
          variant='outline'
          className='w-32 h-10 bg-primary hover:bg-primary/80 text-center text-sm font-bold leading-[28px]'
        >
          Thanh toán
        </Button>
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
        <Button
          variant='outline'
          className='w-32 h-10 bg-primary hover:bg-primary/80 text-center text-sm font-bold leading-[28px]'
          onClick={handleReviewOpen}
        >
          Đánh giá
        </Button>
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
        imageUrl={order.items[0].imageUrl.url}
        title={order.name}
        address={`${order.address.street}, ${order.address.borough}, ${order.address.city}`}
        starMedium={4.5}
      />
    </div>
  );
};

export default OrderCard;
