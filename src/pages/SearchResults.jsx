import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMeals } from '../api/vestigen';
import LoadingSpinner from '../components/LoadingSpinner';
import MealCard from '../components/MealCard';

const SearchResults = () => {

  const [searchParams]=useSearchParams();
  const query=searchParams.get("q") || "" ;
  const [meals,setMeals]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    if(!query){
      setMeals([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    searchMeals(query)
    .then((res)=> setMeals(res.data.meals || [] ))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false));
  },[query]);

  if(loading){
    return <LoadingSpinner/>
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-10">
      <h1 className='text-2xl sm:text-3xl font-bold mt-6 mb-8 text-gray-800'>
        Search Results for <span className='text-emerald-600 ml-2'>"{query}"</span></h1>
        {meals.length===0 ? (<p className='text-center text-gray-500 text-lg mt-10'>Search Result not Found</p>
          ): (<div className='grid gap-6 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4'>
              {meals.map((meal)=>(<MealCard key={meal.idMeal} meal={meal} />))}
            </div>) 
        }
    </div>
  )
}

export default SearchResults