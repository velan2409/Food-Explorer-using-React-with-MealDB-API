import React from 'react'
import { useFavorites } from '../contexts/FavoritesContext'
import MealCard from '../components/MealCard';
import { Link } from "react-router-dom";


const Favorites = () => {

  const {favorites}=useFavorites();

  return (
    <div className='max-w-160 mx-auto bg-grey-50 min-h-screen'>
      <h1 className='text-3xl font-semibold mt-5 mb-6  text-emerald-900'>♥ Favorite Meals</h1>

      {favorites.length===0 ? (
        <div>
           <p className='text-2xl ' >You haven't added any items Yet</p><br />
           <Link to='/' className='inline-block mt-4 px-6 py-2 bg-emerald-900 
             text-white rounded-lg shadow hover:bg-grey-90 transition'>
            Explore Meals
           </Link>
        </div>
      ) : (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4
      gap-6'>
        {favorites.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
      </div> 
      ) }
      
    </div>
  )
}

export default Favorites