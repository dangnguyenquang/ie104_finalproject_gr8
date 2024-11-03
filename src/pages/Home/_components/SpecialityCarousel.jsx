import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

import Speciality1 from '~/assets/images/home/speciality-1.png'
import Speciality2 from '~/assets/images/home/speciality-2.png'
import Speciality3 from '~/assets/images/home/speciality-3.png'

const SpecialityCarousel = () => {
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

  const images = [
    Speciality1,
    Speciality2,
    Speciality3,
    Speciality1,
    Speciality2,
    Speciality3,
    Speciality1,
    Speciality2,
    Speciality3,
  ]

  return (
    <div className='mx-auto max-w-[1190px] relative'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className='w-[272px] h-[381px] object-cover rounded-xl'
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SpecialityCarousel
