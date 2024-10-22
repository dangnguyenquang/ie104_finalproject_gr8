import searchBackground from '~/assets/images/home/search-bg.png'
import homeBackground from '~/assets/images/home/home-bg.png'

import { SearchBar, FoodCard } from '~/components/ui'
import SpecialityCarousel from './components/SpecialityCarousel'
import foodCardImg from '~/assets/images/home/food-card.png'

// Data Sample
const data = {
  specialtyFoods: [
    {
      imageUrl: {
        url: 'https://res.cloudinary.com/dtjub1t7k/image/upload/v1728704151/vpe1zfukvjyl8uy3v6s8.jpg',
        public_id: 'vpe1zfukvjyl8uy3v6s8',
      },
      _id: '6709eb33fea5c625f751edd9',
      name: 'Bún chả hà nội',
      createdAt: '2024-10-12T03:21:23.592Z',
      updatedAt: '2024-10-12T03:21:23.593Z',
      slug: 'bun-cha-ha-noi',
      __v: 0,
    },
  ],
  restaurants: [
    {
      address: {
        street: 'phương hữu ngọt',
        city: 'Hồ Chí Minh',
        borough: 'quân thủ đức',
        zip: '22520341',
      },
      _id: '670a3767202dc1c1e16411a9',
      ownerId: '670a335b202dc1c1e1641198',
      name: 'Nhà hàng đại phát',
      profit: 125,
      quantitySolded: 15,
      phone: '036327097999',
      time_open: '2h sáng',
      time_close: '10h tối',
      starMedium: 5,
      status: 'active',
      imageUrl: [],
      createdAt: '2024-10-12T08:58:21.640Z',
      updatedAt: '2024-10-12T08:58:21.640Z',
    },
  ],
  foods: [
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
    {
      image: foodCardImg,
      rating: '4.5',
      restaurant: 'Quán Cô Bảy Chọ',
      name: 'Hủ tiếu bò viên',
      address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
      price: 100000,
      id: 1,
    },
  ],
}

const Home = () => {
  return (
    <main className='w-full'>
      <section
        className='relative w-full h-auto items-center py-32 px-64 '
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
          <SpecialityCarousel />
        </div>

        <div className='flex flex-col justify-center text-center'>
          <h2 className='text-[80px] font-semibold font-oswald text-primaryText leading-[110px]'>
            Món ăn được yêu thích nhất
          </h2>
          <div className='w-1/6 h-1.5 bg-secondary mt-3.5 mx-auto mb-14'></div>
          <div className='grid grid-cols-4 max-w-[1190px] gap-8 mx-auto'>
            {data.foods.map((food, index) => (
              <FoodCard
                image={food.image}
                name={food.name}
                rating={food.rating}
                restaurant={food.restaurant}
                address={food.address}
                price={food.price}
                id={food.id}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
