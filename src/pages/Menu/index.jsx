import * as React from 'react'
import { useState, useEffect } from 'react'
import RestaurantList from './components/RestaurantList'
import DistrictFilter from './components/DistrictFilter'
import CategroryFilter from './components/CategroryFilter'
import foodCardImg from '~/assets/images/home/food-card.png'
import { SearchBar } from '~/components/ui'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { Button } from '~/components/ui/Button'
import Pagination from '@mui/material/Pagination'

const Restaurants = [
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 1,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 2,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 3,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 4,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 5,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 6,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 7,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 8,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 9,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 10,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 11,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 12,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 13,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 14,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 15,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 16,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 17,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 18,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 19,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Quán Cô Bảy Chọ',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 20,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Cô Ba',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 21,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Cô Ba',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 22,
  },
  {
    image: foodCardImg,
    rating: '4.5',
    restaurant: 'Cô Ba',
    address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
    id: 23,
  },
]
const itemsPerPage = 20
const Menu = () => {
  // hook xử lý select filter quán bán chạy nhất/ quán mới nhất
  const [selectedRestaurantFilter, setSelectedRestaurantFilter] = useState('Best seller')
  const handleChangeSelect = (event) => {
    setSelectedRestaurantFilter(event.target.value)
  }

  // hook xử lý filter lọc theo số sao
  const [countStar, setCountStart] = useState(5)

  // Hàm xử lý btn delete all
  const handleDeleteAll = () => {
    setCountStart(0), selectedDistricts.map((district) => (district.isChecked = false))
    setSelectedDistricts([])
    // selectedCategories.map((category) => (category.isChecked) = )
    setSelectedCategories([])
  }

  // xử lý pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageData, setCurrentPageData] = useState([])

  useEffect(() => {
    const firstItemIndex = (currentPage - 1) * itemsPerPage
    const lastItemIndex = firstItemIndex + itemsPerPage
    setCurrentPageData(Restaurants.slice(firstItemIndex, lastItemIndex))
  }, [currentPage, Restaurants])

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }

  return (
    <div className='w-full justify-items-center px-16 py-8'>
      {/* Thanh Search */}
      <div className='w-full'>
        {/* ================================================= */}
        <div className='w-full '>
          <div className='relative flex justify-center items-center mb-[40px]'>
            <div className='w-[50%]'>
              <SearchBar />
            </div>
            <div className='absolute right-0'>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={selectedRestaurantFilter}
                  onChange={handleChangeSelect}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value='Best seller'>Quán bán chạy nhất</MenuItem>
                  <MenuItem value='Newest restaurant'>Quán mới nhất</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        <div className='flex'>
          {/* Bộ lọc */}
          <div className='w-[300px] mr-[50px]'>
            <div className='bg-primary rounded-t-[20px] h-[95px] justify-center items-center flex gap-1'>
              <img src='../src/assets/icons/menu/filter_icon.svg' alt='' />
              <div className='text-accent font-bold text-[25px] uppercase'>Bộ lọc tìm kiếm</div>
            </div>
            <div className='bg-[#f0f1f2] p-5 rounded-b-[20px]'>
              {/*  lọc theo Rating */}
              <div className=''>
                <Box>
                  <Typography component='legend'>
                    <div className='text-[20px] text-primaryText font-bold'>Quán có số sao từ</div>
                  </Typography>
                  <div className='flex items-end'>
                    <Rating
                      name='simple-controlled'
                      value={countStar}
                      onChange={(event, newCountStar) => {
                        setCountStart(newCountStar)
                      }}
                    />
                    <div className='ml-2 text-primaryText'>trở lên</div>
                  </div>
                </Box>
              </div>
              {/* đường line */}
              <div className='bg-primaryText w-full h-0.5 mt-[16px] mb-[16px]'></div>

              {/* lọc theo khu vực */}
              <DistrictFilter />

              {/* đường line */}
              <div className='bg-primaryText w-full h-0.5 mt-[16px] mb-[16px]'></div>

              {/* Lọc theo danh mục món ăn */}
              <CategroryFilter />

              {/* ====================== Chưa biết xử ly =========================== */}
              {/* nút Xóa hết tất cả
              <Button className='bg-primary hover:bg-primary w-full' onClick={handleDeleteAll}>
                Xóa hết tất cả
              </Button> */}
            </div>
          </div>

          {/* Kết quả tìm kiếm */}
          <div className='justify-center'>
            <RestaurantList Restaurants={currentPageData} />
            <div className='flex justify-center mt-10'>
              <Pagination
                count={Math.ceil(Restaurants.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#7D0600',
                  },
                  '& .MuiPaginationItem-page.Mui-selected': {
                    backgroundColor: '#7D0600',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#a40b0b', 
                    },
                  },
                  '& .MuiPaginationItem-ellipsis': {
                    color: '#7D0600',
                  },
                  '& .MuiPaginationItem-icon': {
                    color: '#7D0600',
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
