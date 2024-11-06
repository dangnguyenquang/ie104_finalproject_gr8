import React from 'react'
import { Button } from '~/components/ui/Button'
import Navigation from '~/components/ui/Navigation'
import OrdersList from './components/OrdersList'
import { BorderOuter } from '@mui/icons-material'

const OrderTrackingPage = () => {
  const tabLabels = ['Tất cả', 'Chờ xác nhận', 'Chờ vận chuyển', 'Hoàn thành', 'Đã hủy']

  const getInitialTab = () => {
    const savedTab = localStorage.getItem('selectedTab')
    return savedTab ? parseInt(savedTab, 10) : 0
  }

  const [selectedTab, setSelectedTab] = React.useState(getInitialTab)

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
    localStorage.setItem('selectedTab', newValue)
  }

  const data = {
    orders: [
      {
        _id: 'order1',
        name: 'McDonalds',
        address: {
          street: '123 hồ hải hoàn',
          city: 'Hồ Chí Minh',
          borough: 'Thủ Đức',
          zip: '400',
        },
        items: [
          {
            _id: 'item1',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Burger phô mai',
            quantity: 1,
            price: 50000,
            starMedium: 4,
          },
          {
            _id: 'item2',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Khoai tây chiên lớn',
            quantity: 2,
            price: 30000,
            starMedium: 4,
          },
        ],
        totalPrice: 110000,
        status: 'pending',
      },
      {
        _id: 'order2',
        name: 'KFC',
        address: {
          street: '123 hồ hải hoàn',
          city: 'Hồ Chí Minh',
          borough: 'Thủ Đức',
          zip: '400',
        },
        items: [
          {
            _id: 'item3',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Gà rán',
            quantity: 3,
            price: 70000,
            starMedium: 5,
          },
          {
            _id: 'item4',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Nước ngọt',
            quantity: 1,
            price: 15000,
            starMedium: 4,
          },
        ],
        totalPrice: 225000,
        status: 'shipping',
      },
      {
        _id: 'order3',
        name: 'Pizza Hut',
        address: {
          street: '123 hồ hải hoàn',
          city: 'Hồ Chí Minh',
          borough: 'Thủ Đức',
          zip: '400',
        },
        items: [
          {
            _id: 'item5',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Pizza Hải sản',
            quantity: 1,
            price: 150000,
            starMedium: 5,
          },
          {
            _id: 'item6',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Mỳ Ý Bò',
            quantity: 1,
            price: 80000,
            starMedium: 4,
          },
        ],
        totalPrice: 230000,
        status: 'completed',
      },
      {
        _id: 'order4',
        name: 'Starbucks',
        address: {
          street: '123 hồ hải hoàn',
          city: 'Hồ Chí Minh',
          borough: 'Thủ Đức',
          zip: '400',
        },
        items: [
          {
            _id: 'item7',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Caramel Macchiato',
            quantity: 2,
            price: 60000,
            starMedium: 5,
          },
          {
            _id: 'item8',
            imageUrl: {
              url: 'https://res.cloudinary.com/dtyyxogjq/image/upload/v1729829251/Item_images/ypxajgnklpd7ibhaadrs.jpg',
            },
            title: 'Bánh Croissant',
            quantity: 1,
            price: 40000,
            starMedium: 4,
          },
        ],
        totalPrice: 160000,
        status: 'canceled',
      },
    ],
  }

  const getOrdersByStatus = (status) => {
    if (status === 'all') {
      return data.orders
    }
    return data.orders.filter((order) => order.status === status)
  }

  const ordersToDisplay = React.useMemo(() => {
    const statusMap = ['all', 'pending', 'shipping', 'completed', 'canceled']
    return getOrdersByStatus(statusMap[selectedTab])
  }, [selectedTab, data.orders])

  return (
    <div className='w-full flex flex-col items-center mt-10 space-y-4'>
      {/* Navigation */}
      <div>
        <Navigation labels={tabLabels} value={selectedTab} onChange={handleTabChange} />
      </div>

      {/* Orders List */}
      <div className='bg-[#fdf8e7] w-[800px]'>
        <OrdersList orders={ordersToDisplay} />
      </div>
    </div>
  )
}

export default OrderTrackingPage
