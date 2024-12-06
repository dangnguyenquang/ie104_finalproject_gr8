import React from 'react'
import BubblyButton from '~/components/ui/BubblyButton'
import { formatNumber, truncateStringToWords } from '~/helpers/wordHelpper'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const FoodCart = ({ foodInfo, onIncrease, onDecrease }) => {
  const maxQuantityReached = foodInfo.quantity >= foodInfo.maxQuantity

  return (
    <div className='w-[420px] h-[110px] px-3 py-5 flex gap-3 justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
      <img
        src={foodInfo.imageUrl[0].url}
        alt=''
        className='w-[70px] h-auto object-cover rounded-xl'
      />

      <div className='flex-1 flex flex-col justify-between'>
        <h3 className='text-[18px] font-bold'>{foodInfo.title}</h3>
        <div className='flex gap-1 items-end text-primary'>
          <span className='font-bold text-[18px]'>
            {formatNumber(foodInfo.price - foodInfo.price * (foodInfo.discount / 100))}
          </span>
          <span className='text-[12px] font-light pb-1 items-end'>VND/phần</span>
        </div>
      </div>

      <div className='flex gap-2 items-center mt-auto'>
        <BubblyButton
          className={`bg-primary rounded-xl px-1 pb-[1px] text-2xl text-white flex items-center justify-center ${
            maxQuantityReached ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={onIncrease}
          disabled={maxQuantityReached} // Disable nếu đạt số lượng tối đa
        >
          <AddIcon fontSize='small' />
        </BubblyButton>
        {foodInfo.quantity}
        <BubblyButton
          className='bg-primary rounded-xl px-1 pb-[1px] text-2xl text-white'
          onClick={onDecrease}
        >
          <RemoveIcon fontSize='small' />
        </BubblyButton>
      </div>
    </div>
  )
}

export default FoodCart
