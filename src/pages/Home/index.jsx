import searchBackground from '~/assets/images/home/search-bg.png'
import homeBackground from '~/assets/images/home/home-bg.png'
import { useState, useEffect } from 'react'

import { SearchBar, FoodCard } from '~/components/ui'
import SpecialityCarousel from './_components/SpecialityCarousel'
import FoodCategory from './_components/FoodCategory'
import foodCardImg from '~/assets/images/home/food-card.png'
import Speciality1 from '~/assets/images/home/speciality-1.png'
import Speciality2 from '~/assets/images/home/speciality-2.png'
import Speciality3 from '~/assets/images/home/speciality-3.png'
import vector from '~/assets/images/home/vector-3.png'
import recommend from '~/assets/images/home/recommend.png'
import RecommendCarousel from './_components/RecommendCarousel'
import homeApiInstance from '~/apis/home'

const SpecialityFood = [
  {
    image: Speciality1,
    name: 'Bánh xèo',
  },
  {
    image: Speciality2,
    name: 'Bánh xèo',
  },
  {
    image: Speciality3,
    name: 'Bánh xèo',
  },
  {
    image: Speciality1,
    name: 'Bánh xèo',
  },
  {
    image: Speciality2,
    name: 'Bánh xèo',
  },
  {
    image: Speciality3,
    name: 'Bánh xèo',
  },
  {
    image: Speciality1,
    name: 'Bánh xèo',
  },
]

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await homeApiInstance.getHome()
        setData(homeData)
      } catch (error) {}
    }

    fetchData()
  }, [])

  return (
    <main className='w-full'>
      <section
        className='relative w-full min-h-[90vh] items-center py-32 px-64 '
        style={{
          backgroundImage: `url(${searchBackground})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mx-auto max-w-[1000px] flex flex-col gap-6'>
          <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-30 rounded'></div>
          <h1 className='mx-auto font-oswald text-[90px] text-primaryText text-center leading-[116px]'>
            Ăn ngon sống khỏe tươi trẻ mỗi ngày!
          </h1>
          <SearchBar />
          <h2 className='text-[20px] font-oswald text-center mx-auto py-4'>
            Hãy trải nghiệm dịch vụ đặt món ăn với <strong>Yummy</strong> - Việc đặt món ăn chưa bao
            giờ là dễ dàng đến như vậy!
          </h2>
        </div>
      </section>

      <section
        className='relative w-full h-auto items-center justify-center px-16'
        style={{
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='py-8 mx-auto text-center h-screen'>
          <h2 className='text-[80px] font-semibold font-oswald text-primaryText leading-[110px]'>
            Các món ăn đặc sản
          </h2>
          <h3 className='text-[25px] font-oswald text-primaryText mb-10'>
            Mang đậm chất ẩm thực Việt Nam
          </h3>
          <SpecialityCarousel SpecialityFoods={SpecialityFood} />
        </div>

        <div className='flex flex-col justify-center text-center'>
          <h2 className='text-[80px] font-semibold font-oswald text-primaryText leading-[110px]'>
            Món ăn được yêu thích nhất
          </h2>
          <div className='w-1/6 h-1.5 bg-secondary mt-3.5 mx-auto mb-14'></div>
          <div className='grid grid-cols-4 max-w-[1190px] gap-8 mx-auto'>
            {data?.foods.map((food, index) => (
              <FoodCard
                key={index}
                image={food?.imageUrl[0]?.url || ''}
                name={food.title}
                rating={food.starMedium}
                restaurant={food.restaurantName}
                address={`${food.restaurantAddress.street} ${food.restaurantAddress.borough} ${food.restaurantAddress.city}`}
                price={food.price}
                id={food._id}
              />
            ))}
          </div>
        </div>

        <div className='w-full mt-14'>
          <div className='relative  w-fit ml-auto pl-16'>
            <img src={vector} alt='vector' className='absolute z-10 bottom-0' />
            <h2 className='text-[65px] font-semibold font-oswald text-primaryText text-right'>
              Bộ sưu tập món ăn
            </h2>
          </div>
          <FoodCategory />
        </div>
      </section>

      <section
        className='relative w-full h-auto items-center py-20 px-16 mt-20'
        style={{
          backgroundImage: `url(${recommend})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex items-center h-full'>
          <div className='rounded-full bg-primary text-[25px] font-oswald px-10 py-2 text-white'>
            Một số quán bạn nên thử
          </div>
          <div className='flex-1 h-1 rounded-e-md bg-primary mb-14 mt-14'></div>
        </div>

        <div className='mx-auto max-w-[1100px]'>
          <RecommendCarousel restaurants={data?.restaurants || []} />
        </div>
      </section>
    </main>
  )
}

export default Home
