import * as React from 'react'
import RestaurantCard from '~/components/ui/RestaurantCard'

const RestaurantList = ({ Restaurants }) => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-5 gap-10 '>
      {Restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <RestaurantCard
            image={restaurant.image}
            rating={restaurant.rating}
            restaurant={restaurant.restaurant}
            address={restaurant.address}
            id={restaurant.id}
          />
        </div>
      ))}
    </div>
  )
}

export default RestaurantList
