import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchCategories } from '../api/vestigen';
import { Link } from 'react-router-dom';
import Footering from '../components/Footering';

const Home = () => {

    const [categories,setCategories]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        fetchCategories()
        .then((res)=>{
            console.log(res.data); 
            setCategories(res.data.categories);
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false);
        })        
    },[]);

   
  return (
    <div className='mx-auto p-3'>
        <div className='text-center mb-3 mt-8'>
            <h1 className='text-2xl md:text-3xl font-semibold text-emerald-900 tracking-tight' >
                Browse Meal Categories
            </h1>
            <p>Discover delicious recipe from around the world</p>
            <div className="mt-4 flex justify-center items-center">
                <div className='h-1 w-24 bg-emerald-600 rounded-full'></div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {Array.isArray(categories) && categories.map((cat) => (
                <Link  to={`/category/${cat.strCategory}`} key={cat.idCategory} className='group cursor-pointer'>
                    <img src={cat.strCategoryThumb} alt={cat.strCategory} 
                        className='w-full rounded-lg shadow 
                        group-hover:shadow-xl transition'/>
                        <p className='mt-2 font-medium text-center text-emerald-900'>{cat.strCategory}</p>
                </Link>
                ))}
            </div>
        </div>
        <Footering/>
    </div>
  )
}

export default Home