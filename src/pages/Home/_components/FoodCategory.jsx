import juice from '~/assets/images/home/juice_category.jpg'
import fastfood from '~/assets/images/home/fastfood_category.jpg'
import eu from '~/assets/images/home/eu_category.jpg'
import vegan from '~/assets/images/home/vegan_category.jpg'
import pho from '~/assets/images/home/pho_category.jpg'
import snack from '~/assets/images/home/snack_category.jpg'
import milktea from '~/assets/images/home/milktea_category.jpg'
import categoryImg from '~/assets/images/home/category.jpg'
import { routes } from '~/configs'
import { Link } from 'react-router-dom'

const FoodCategory = () => {
  const getLinkWithCategory = (category) => {
    return `${routes.MENU}?categories=${category}`
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-[1200px] w-fit'>
      <Link to={getLinkWithCategory('Đồ+uống')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${juice})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms]  md:translate-y-[105px] lg:translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-50px] max-md:hidden'>
              Đồ uống
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Đồ uống
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Bộ sưu tập gôm các loại nước ép trái cây cung cấp nhiều chất dinh dưỡng cho cơ thể,
              đồng thời giúp tăng sức đề kháng.
            </div>
          </div>
        </div>
      </Link>

      <Link to={getLinkWithCategory('Thức+ăn+nhanh')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${fastfood})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-5px] max-md:hidden'>
              Thức ăn nhanh
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Thức ăn nhanh
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Fastfood hay đồ ăn nhanh như gà rán, xúc xích, pizza… được các bạn trẻ rất yêu thích
              vì sự tiện dụng.
            </div>
          </div>
        </div>
      </Link>

      <Link to={getLinkWithCategory('Món+Á')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${eu})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-50px] max-md:hidden'>
              Món Á
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Món Á
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Các món ăn đến từ lục địa có nền ẩm thực phong phú, đa dạng, được chế biến bởi những
              đầu bếp lành nghề.
            </div>
          </div>
        </div>
      </Link>

      <Link to={getLinkWithCategory('Cơm')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${categoryImg})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-70px] max-md:hidden'>
              Cơm
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Cơm
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Cơm là món ăn phổ biến nhất đối với người Việt, có đa dạng các món cơm như: cơm Tấm,
              cơm chiên, ...
            </div>
          </div>
        </div>
      </Link>
      <Link to={getLinkWithCategory('Trà+sữa')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${milktea})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[100px] lg:translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-60px] max-md:hidden'>
              Trà sữa
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Trà sữa
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Trà sữa là loại thức uống đa dạng được tìm thấy ở nhiều nền văn hóa, bao gồm một vài
              cách kết hợp giữa trà và sữa.
            </div>
          </div>
        </div>
      </Link>

      <Link to={getLinkWithCategory('Món+chay')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${vegan})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-40px] max-md:hidden'>
              Món chay
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Món chay
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Các món chay được làm từ loại thực phẩm có nguồn gốc từ thực vật như rau củ quả, trái
              cây, ngũ cốc
            </div>
          </div>
        </div>
      </Link>

      <Link to={getLinkWithCategory('Bún+phở')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${pho})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-50px] max-md:hidden'>
              Bún phở
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Bún phở
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Phở là một món ăn truyền thống của Việt Nam, được xem là một trong những món ăn tiêu
              biểu cho nền ẩm thực Việt Nam.
            </div>
          </div>
        </div>
      </Link>

      <Link to={getLinkWithCategory('Đồ+ăn+vặt')} className='w-fit'>
        <div
          className='relative rounded-lg h-[280px] w-[240px] md:h-[300px] lg:w-[270px] lg:h-[330px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
          style={{
            backgroundImage: `url(${snack})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            clipPath: 'inset(5px 0 0 0 round 15% 0)',
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>

          <div className='relative mt-auto text-center text-white'>
            <div className='text-[28px] md:text-[30px] lg:text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-40px] max-md:hidden'>
              Đồ ăn vặt
            </div>
            <div className='text-[28px] absolute bottom-10 font-bold font-oswald md:hidden'>
              Đồ ăn vặt
            </div>

            <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px] max-md:hidden'>
              Các loại thức ăn phục vụ cho việc ăn giữa các bữa ăn và thường dưới hình thức thực
              phẩm đóng gói và chế biến sẵn
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FoodCategory
