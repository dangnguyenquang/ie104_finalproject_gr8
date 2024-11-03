import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Button } from '~/components/ui/Button'
import { FaStar } from 'react-icons/fa'

export default function ReviewModal({ open, onClose, imageUrl, title, address, starMedium }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (v, i) => (
      <FaStar key={i} color={i < rating ? '#FFD700' : '#E0E0E0'} />
    ))
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm'>
      <div className='w-[600px] p-6 bg-white rounded-[20px]'>
        <DialogTitle className='text-secondary text-4xl font-bold uppercase text-center'>
          Đánh giá chất lượng của quán
        </DialogTitle>
        <DialogContent className='flex flex-col items-center '>
          <div className='flex w-full p-2 space-x-4 items-center mb-4 rounded-lg border'>
            <img
              src={imageUrl}
              alt={title}
              className='flex-none w-32 h-24 rounded-[20px] object-cover'
            />
            <div className='flex-grow'>
              <div className='text-lg font-bold mb-1'>{title}</div>
              <div className='text-md text-primaryText mb-1'>{address}</div>
              <div className='flex items-center text-lg'>{renderStars(starMedium)}</div>
            </div>
          </div>
          <textarea
            className='w-full h-32 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            placeholder='Viết bình luận của bạn cho quán này...'
          />
        </DialogContent>
        <DialogActions className='flex justify-end gap-4 mt-4'>
          <Button
            onClick={onClose}
            variant='outline'
            className='w-[130px] h-[50px] rounded-full border-2 border-black text-primaryText'
          >
            Trở về
          </Button>
          <Button
            onClick={onClose}
            className='w-[130px] h-[50px] bg-primary text-white rounded-full'
          >
            Hoàn thành
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  )
}
