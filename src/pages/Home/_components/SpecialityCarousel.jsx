import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import { routes } from '~/configs'

const SpecialityCarousel = ({ SpecialityFoods }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true, // Kích hoạt chế độ trung tâm
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: '30px',
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
        {SpecialityFoods &&
          SpecialityFoods.map((food, index) => (
            <Link key={index} to={`${routes.MENU}?search=${food.name}&type=food`}>
              <div key={food.name}>
                <img
                  src={food.imageUrl.url}
                  alt={`Image ${food.name}`}
                  className='w-[210px] h-[339px] lg:w-[272px] lg:h-[381px] object-cover rounded-xl'
                />
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  )
}

export default SpecialityCarousel
