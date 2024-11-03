import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import RestaurantCard from '~/components/ui/RestaurantCard'

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, onClick, style } = props
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        left: '-75px', // Tăng khoảng cách từ nút prev đến item carousel
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ màu đen
        borderRadius: '50%', // Viền tròn
        padding: '30px', // Khoảng cách bên trong để nút tròn lớn hơn
        paddingLeft: '38px', // Đảm bảo nút prev tròn cân đối
        paddingRight: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowBackIos style={{ color: 'white', fontSize: '40px' }} />
    </div>
  )
}

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick, style } = props
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        right: '-75px', // Tăng khoảng cách từ nút next đến item carousel
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền mờ màu đen
        borderRadius: '50%', // Viền tròn
        padding: '30px', // Khoảng cách bên trong để nút tròn lớn hơn
        paddingLeft: '33px', // Đảm bảo nút next tròn cân đối
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ArrowForwardIos style={{ color: 'white', fontSize: '40px' }} />
    </div>
  )
}

const RecommendCarousel = ({ restaurants }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='mx-auto max-w-[1190px] relative'>
      <Slider {...settings}>
        {restaurants.map((restaurant, index) => (
          <div key={index}>
            <RestaurantCard
              image={restaurant.image}
              rating={restaurant.rating}
              restaurant={restaurant.restaurant}
              address={restaurant.address}
              id={restaurant.id}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default RecommendCarousel
