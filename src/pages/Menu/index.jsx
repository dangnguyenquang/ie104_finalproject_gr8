import * as React from 'react'
import { useState, useEffect } from 'react'
import RestaurantList from './components/RestaurantList'
import DistrictFilter from './components/DistrictFilter'
import CategroryFilter from './components/CategroryFilter'
import { SearchBar } from '~/components/ui'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import { Pagination } from '@mui/material'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import authApi from '~/apis/auth'
// const Restaurants =
// = [
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 1,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 2,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 3,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 4,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 5,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 6,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 7,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 8,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 9,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 10,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 11,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 12,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 13,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 14,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 15,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 16,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 17,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 18,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 19,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Quán Cô Bảy Chọ',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 20,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Cô Ba',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 21,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Cô Ba',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 22,
//   },
//   {
//     image: foodCardImg,
//     rating: '4.5',
//     restaurant: 'Cô Ba',
//     address: '102 Đường Số 8, P. Bình Trị Đông B, Bình Tân, TP. HCM',
//     id: 23,
//   },
// ]

const itemsPerPage = 20
const Menu = () => {
  const [Restaurants, setRestaurants] = useState([])

  const [numberPages, setNumberPages] = useState(1)

  const [filterList, setFilterList] = useState({
    boroughRestaurant: '',
    nameRestaurant: '',
    categrories: '',
    starMedium: '5',
    typeSort: 'Best seller',
  })

  const handleSearch = async () => {
    try {
      const res = await authApi.Search(filterList)
      setRestaurants(res.restaurants)
      setNumberPages(res.objectPagination)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleSearch()
    scrollToTop()
  }, [filterList])

  // District
  const [selectedDistricts, setSelectedDistricts] = useState([])
  const handleSelectDistricts = (event) => {
    const isChecked = event.target.checked
    const district = event.target.value

    setSelectedDistricts((prevSelected) =>
      isChecked ? [...prevSelected, district] : prevSelected.filter((d) => d !== district),
    )
    setFilterList((prevFilterList) => ({
      ...prevFilterList,
      boroughRestaurant: isChecked
        ? [...selectedDistricts, district]
        : selectedDistricts.filter((d) => d !== district),
    }))
  }

  // categrory
  const [selectedCategories, setSelectedCategories] = useState([])
  const handleSelectCategories = (event) => {
    const isChecked = event.target.checked
    const category = event.target.value
    setSelectedCategories((prevSelected) => {
      if (isChecked) {
        return [...prevSelected, event.target.value]
      } else {
        return prevSelected.filter((category) => category !== event.target.value)
      }
    })
    setFilterList((prevFilterList) => ({
      ...prevFilterList,
      categrories: isChecked
        ? [...selectedCategories, category]
        : selectedCategories.filter((d) => d !== categories),
    }))
  }

  // hook xử lý select filter quán bán chạy nhất/ quán mới nhất
  const [selectedRestaurantFilter, setSelectedRestaurantFilter] = useState('Best seller')
  const handleChangeSelect = (event) => {
    setSelectedRestaurantFilter(event.target.value)
    setFilterList((prevFilterList) => ({
      ...prevFilterList,
      typeSort: event.target.value,
    }))
  }

  // hook xử lý filter lọc theo số sao
  const [countStar, setCountStar] = useState(5)
  const handleRating = (event) => {
    setCountStar(Number(event.target.value))
    setFilterList((prevFilterList) => ({
      ...prevFilterList,
      starMedium: event.target.value,
    }))
  }

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
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
          <div className='2xl:w-[300px] mr-[50px] w-[250px]'>
            <div className='bg-primary rounded-t-[20px] h-[95px] justify-center items-center flex gap-1'>
              <img src='../src/assets/icons/menu/filter_icon.svg' alt='' />
              <div className='text-accent font-bold text-[20px] 2xl:text-[25px] uppercase'>
                Bộ lọc tìm kiếm
              </div>
            </div>
            <div className='bg-[#f0f1f2] p-5 rounded-b-[20px]'>
              {/*  lọc theo Rating */}
              <div className=''>
                <Box>
                  <Typography component='legend'>
                    <div className='text-[20px] text-primaryText font-bold'>Quán có số sao từ</div>
                  </Typography>
                  <div className='flex items-end'>
                    <Rating name='simple-controlled' value={countStar} onChange={handleRating} />
                    <div className='ml-2 text-primaryText'>trở lên</div>
                  </div>
                </Box>
              </div>
              {/* đường line */}
              <div className='bg-primaryText w-full h-0.5 mt-[16px] mb-[16px]'></div>

              {/* lọc theo khu vực */}
              <DistrictFilter
                selectedDistricts={selectedDistricts}
                handleSelectDistricts={handleSelectDistricts}
              />

              {/* đường line */}
              <div className='bg-primaryText w-full h-0.5 mt-[16px] mb-[16px]'></div>

              {/* Lọc theo danh mục món ăn */}
              <CategroryFilter
                selectedCategories={selectedCategories}
                handleSelectCategories={handleSelectCategories}
              />
            </div>
          </div>

          {/* Kết quả tìm kiếm */}
          <div className='justify-center'>
            <RestaurantList Restaurants={Restaurants} />
            <div className='flex justify-center mt-10'>
              <Pagination
                count={numberPages.numberPages}
                page={numberPages.currentPage}
                // onChange={handlePageChange}
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
