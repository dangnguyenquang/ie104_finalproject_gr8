import * as React from 'react'
import RestaurantCard from '~/components/ui/RestaurantCard'

const RestaurantList = ({ Restaurants }) => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-5 gap-10 '>
      {Restaurants.map((restaurant, index) => (
        <div key={index}>
          <RestaurantCard
            image={restaurant.imageUrl[index].url}
            rating={restaurant.starMedium}
            restaurant={restaurant.name}
            address={`${restaurant.address.street}, ${restaurant.address.borough}, ${restaurant.address.city}`}
            id={restaurant._id}
          />
        </div>
      ))}
    </div>
  )
}
export default RestaurantList
