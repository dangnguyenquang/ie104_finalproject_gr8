import categoryImg from '~/assets/images/home/category.png'

const FoodCategory = () => {
  return (
    <div className='flex justify-center mt-8'>
      <div
        className='rounded-t-[20px] w-[350px] h-[300px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        style={{
          backgroundImage: `url(${categoryImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mt-auto text-[40px] font-bold text-secondary py-[15px] px-[42px] font-oswald'>
          Bún phở
        </div>
      </div>
      <div
        className='rounded-t-[20px] w-[350px] h-[300px] py-3 px-5 flex flex-col justify-between ml-[-80px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        style={{
          backgroundImage: `url(${categoryImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mt-auto text-[40px] font-bold text-secondary py-[15px] px-[42px] font-oswald'>
          Bún phở
        </div>
      </div>
      <div
        className='rounded-t-[20px] w-[350px] h-[300px] py-3 px-5 flex flex-col justify-between ml-[-80px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        style={{
          backgroundImage: `url(${categoryImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mt-auto text-[40px] font-bold text-secondary py-[15px] px-[42px] font-oswald'>
          Bún phở
        </div>
      </div>
      <div
        className='rounded-t-[20px] w-[350px] h-[300px] py-3 px-5 flex flex-col justify-between ml-[-80px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        style={{
          backgroundImage: `url(${categoryImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mt-auto text-[40px] font-bold text-secondary py-[15px] px-[42px] font-oswald'>
          Bún phở
        </div>
      </div>
    </div>
  )
}

export default FoodCategory
