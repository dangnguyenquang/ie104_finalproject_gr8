import searchBackground from '~/assets/images/home/search-bg.png'
import homeBackground from '~/assets/images/home/home-bg.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchBar, FoodCard } from '~/components/ui'
import SpecialityCarousel from './_components/SpecialityCarousel'
import FoodCategory from './_components/FoodCategory'
import vector from '~/assets/images/home/vector-3.png'
import recommend from '~/assets/images/home/recommend.png'
import RecommendCarousel from './_components/RecommendCarousel'
import homeApiInstance from '~/apis/home'
import { routes } from '~/configs'

const Home = () => {
  const [data, setData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [typeSearch, setTypeSearch] = useState('restaurant')

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`${routes.MENU}?search=${searchValue}&type=${typeSearch}`)
  }

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
        className='relative w-full lg:h-[100vh] items-center pt-14 pb-5 md:py-16 lg:py-32'
        style={{
          backgroundImage: `url(${searchBackground})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mx-auto max-w-[350px] md:max-w-[650px] lg:max-w-[950px] flex flex-col gap-6'>
          <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-30 rounded'></div>
          <h1 className='mx-auto font-oswald text-[35px] md:text-[60px] lg:text-[90px] text-primaryText text-center lg:leading-[116px]'>
            Ăn ngon sống khỏe tươi trẻ mỗi ngày!
          </h1>
          <div className='max-md:hidden'>
            <SearchBar
              searchValue={searchValue}
              handleChangeSearch={(e) => setSearchValue(e.target.value)}
              handleChangeCurrencies={(e) => setTypeSearch(e.target.value)}
              currencyValue={typeSearch}
              handleSubmit={handleSubmit}
            />
          </div>
          <h2 className='text-[16px] lg:text-[20px] font-oswald text-center mx-auto py-4 max-md:hidden'>
            Hãy trải nghiệm dịch vụ đặt món ăn với <strong>Yummy</strong> - Việc đặt món ăn chưa bao
            giờ là dễ dàng đến như vậy!
          </h2>
        </div>
      </section>

      <section className='md:hidden w-[90%] mx-auto mt-2 py-1'>
        <SearchBar
          searchValue={searchValue}
          handleChangeSearch={(e) => setSearchValue(e.target.value)}
          handleChangeCurrencies={(e) => setTypeSearch(e.target.value)}
          currencyValue={typeSearch}
          handleSubmit={handleSubmit}
        />
      </section>

      <section
        className='relative w-full h-auto items-center justify-center px-8 lg:px-16'
        style={{
          backgroundImage: `url(${homeBackground})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='py-8 mx-auto text-center h-[90vh] lg:h-screen'>
          <h2 className='text-[35px] md:text-[60px] lg:text-[80px] font-semibold font-oswald text-primaryText lg:leading-[110px]'>
            Các món ăn đặc sản
          </h2>
          <h3 className='text-[16px] md:text-[25px] font-oswald text-primaryText mb-5 lg:mb-10'>
            Mang đậm chất ẩm thực Việt Nam
          </h3>
          <SpecialityCarousel SpecialityFoods={data?.specialtyFoods} />
        </div>

        <div className='flex flex-col justify-center text-center'>
          <h2 className='text-[30px] md:text-[60px] lg:text-[80px] font-semibold font-oswald text-primaryText lg:leading-[110px]'>
            Món ăn được yêu thích nhất
          </h2>
          <div className='w-2/4 h-1 md:w-1/6 md:h-1.5 bg-secondary mt-3.5 mx-auto mb-8 lg:mb-14'></div>
          <div className='grid md:grid-cols-3 lg:grid-cols-4 max-w-[1190px] md:gap-2 lg:gap-8 mx-auto'>
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
