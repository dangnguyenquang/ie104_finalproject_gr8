import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
        {SpecialityFoods.map((food, index) => (
          <div key={food.name}>
            <img
              src={food.image}
              alt={`Image ${food.name}`}
              className='w-[272px] h-[381px] object-cover rounded-xl'
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SpecialityCarousel
