import React from 'react';
import { Link } from "react-router-dom";
import FavoriteButton from './FavoriteButton';
import { useFavorites } from '../contexts/FavoritesContext';


const MealCard = ({meal}) => {
  const {toggle,isFavorite}=useFavorites();
  const fav = isFavorite(meal.idMeal);
  return (
    <div title={meal.strMeal} className='relative'>
      <FavoriteButton meal={meal} onToggle={toggle} isFav={fav} />
      <Link to={`/meal/${meal.idMeal}`} className='block rounded-lg overflow-hidden shadow 
            hover:shadow-lg transion grid-cols-4 '> 
        <img src={meal.strMealThumb} alt={meal.strMeal}
          className='w-full h-60 object-cover' />
        <div className='p-3 text-center'>
          <p className='font-bold text-grey-800'>{meal.strMeal}</p>
        </div>
      </Link>
    </div>
  )
};

export default MealCard;