import juice from '~/assets/images/home/juice_category.jpg'
import fastfood from '~/assets/images/home/fastfood_category.jpg'
import eu from '~/assets/images/home/eu_category.jpg'
import vegan from '~/assets/images/home/vegan_category.jpg'
import pho from '~/assets/images/home/pho_category.jpg'
import snack from '~/assets/images/home/snack_category.jpg'
import categoryImg from '~/assets/images/home/category.jpg'
import { routes } from '~/configs'
import { Link } from 'react-router-dom'

const FoodCategory = () => {
  const getLinkWithCategory = (category) => {
    return `${routes.MENU}?categories=${category}`
  }

  return (
    <div className='flex flex-col gap-8 mx-auto max-w-[1200px]'>
      <div className='flex justify-between mt-8'>
        <Link to={getLinkWithCategory('Đồ+uống')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${juice})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-50px]'>
                Đồ uống
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Bộ sưu tập gôm các loại nước ép trái cây cung cấp nhiều chất dinh dưỡng cho cơ thể,
                đồng thời giúp tăng sức đề kháng.
              </div>
            </div>
          </div>
        </Link>

        <Link to={getLinkWithCategory('Thức+ăn+nhanh')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${fastfood})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-5px]'>
                Thức ăn nhanh
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Fastfood hay đồ ăn nhanh như gà rán, xúc xích, pizza… được các bạn trẻ rất yêu thích
                vì sự tiện dụng.
              </div>
            </div>
          </div>
        </Link>

        <Link to={getLinkWithCategory('Món+Á')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${eu})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-50px]'>
                Món Á
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Các món ăn đến từ lục địa có nền ẩm thực phong phú, đa dạng, được chế biến bởi những
                đầu bếp lành nghề.
              </div>
            </div>
          </div>
        </Link>

        <Link to={getLinkWithCategory('Cơm')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${categoryImg})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-70px]'>
                Cơm
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Cơm là món ăn phổ biến nhất đối với người Việt, có đa dạng các món cơm như: cơm Tấm,
                cơm chiên, ...
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className='flex justify-between'>
        <Link to={getLinkWithCategory('Trà+sữa')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${categoryImg})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-60px]'>
                Trà sữa
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Trà sữa là loại thức uống đa dạng được tìm thấy ở nhiều nền văn hóa, bao gồm một vài
                cách kết hợp giữa trà và sữa.
              </div>
            </div>
          </div>
        </Link>

        <Link to={getLinkWithCategory('Món+chay')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${vegan})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-40px]'>
                Món chay
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Các món chay được làm từ loại thực phẩm có nguồn gốc từ thực vật như rau củ quả,
                trái cây, ngũ cốc
              </div>
            </div>
          </div>
        </Link>

        <Link to={getLinkWithCategory('Bún+phở')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${pho})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-50px]'>
                Bún phở
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Phở là một món ăn truyền thống của Việt Nam, được xem là một trong những món ăn tiêu
                biểu cho nền ẩm thực Việt Nam.
              </div>
            </div>
          </div>
        </Link>

        <Link to={getLinkWithCategory('Đồ+ăn+vặt')}>
          <div
            className='relative rounded-lg w-[270px] h-[330px] py-3 px-5 flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group'
            style={{
              backgroundImage: `url(${snack})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              clipPath: 'inset(5px 0 0 0 round 15% 0)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg'></div>

            <div className='relative mt-auto text-center text-white'>
              <div className='text-[35px] font-bold font-oswald transition-all duration-[400ms] translate-y-[80px] group-hover:translate-y-[-20px] translate-x-[-40px]'>
                Đồ ăn vặt
              </div>

              <div className='text-[16px] opacity-0 font-light mt-2 transition-all group-hover:delay-200 duration-300 group-hover:opacity-100 group-hover:translate-y-[-20px]'>
                Các loại thức ăn phục vụ cho việc ăn giữa các bữa ăn và thường dưới hình thức thực
                phẩm đóng gói và chế biến sẵn
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FoodCategory
