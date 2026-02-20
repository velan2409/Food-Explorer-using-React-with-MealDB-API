import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFavorites } from '../contexts/FavoritesContext'
import { fetchMealById } from '../api/vestigen'
import LoadingSpinner from '../components/LoadingSpinner'
import FavoriteButton from '../components/FavoriteButton'

const MealDetail  = () => {

  const {id}=useParams();
  const [meal,setMeal]=useState(null);
  const [loading,setLoading]=useState(true);
  const {toggle, isFavorite}=useFavorites();

  useEffect(()=>{
    setLoading(true);
    fetchMealById(id)
    .then((res)=>setMeal(res.data.meals?.[0] || null))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false));
  },[id]);

  if(loading){
    return <LoadingSpinner />
  }

  if(!meal){
    return <p className='text-center text-xl text-grey-20 mt-20'> 
    Meal not found</p>
  }

  const ingredients=[];
  for(let i=1;i<=20;i++){
    const ing=meal[`strIngredient${i}`];
    const measure=meal[`strMeasure1${i}`]

    if(ing?.trim())
      ingredients.push(`${measure} ${ing}`)
  }

  return (
    <div>
      <div className='max-w-4xl mx-auto p-6'>
        <h1 className='text-12xl md:text-2xl font-bold 
        text-emerald-900 text-center mb-8'>{meal.strMeal}</h1>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='relative flex flex-col md:flex-row gap-6'>
            <img src={meal.strMealThumb} alt={meal.strMeal} 
            className='w-full h-auto object-cover rounded shadow-sm'/>
            <div className='absolute top-3 right-2'>
              <FavoriteButton meal={meal} onToggle={toggle} 
              isFav={isFavorite(meal.idMeal)} />
            </div>
          </div>
          <div className='space-y-6'>
            <div className='flex gap-4 text-sm'>
              <span className='px-4 py-2 bg-blue-100 text-blue-700 
              font-bold rounded-full'>{meal.strArea}</span>
              <span className='px-4 py-2 bg-green-100 text-green-700 
              rounded-full font-bold  '>{meal.strCategory}</span>
            </div>
            <div>
              <h2 className='text-1xl font-semibold text-gray-800 mb-4'>Ingediens</h2>
              <ul className='list-disc text-blue-900'>
                {ingredients.map((item, index)=>(
                  <li key={index}>
                    <span ></span>
                    <span className='text-gray-600'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {meal.strYoutube && (
              <a href={meal.strYoutube} className='inline-block 
              bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700
              transition' target='_blank'> Watch Video</a>
            )}
          </div>
        </div>
        <div className='mt-12 bg-white rounded-xl shadow-sm p-8'>
          <h2 className='font-semibold text-3xl text-emerald-600
          mb-6'>Instructions</h2>
          <div className='text-gray-700 leading-relaxed
            space-y-6'>
            <p >{meal.strInstructions}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MealDetail 