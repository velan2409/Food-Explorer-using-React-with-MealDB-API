import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const [query,setQuery]=useState();
    const navigate=useNavigate();

    const handleSearch= async (e)=>{
        e.preventDefault();
        if(!query.trim()) return;
        navigate(`/search?q=${encodeURIComponent(query)}`);
    }

  return (
    <header className="bg-emerald-900 text-white p-4 shadow">
        <nav className='max-w-6xl mx-auto flex sm:flex-row gap-4' 
        items-center justify-between>
            <div className='flex items-center gap-6'>
                <Link to="/"
                    className="text-2xl font-extrabold tracking-wide 
                        text-emerald-500 hover:text-emerald-400 
                        transition duration-300"
                    >
                    🍽 Meal Explorer
                    </Link>
                <Link to="/">Catagories</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
            <div>
                <form  onSubmit={handleSearch} className='flex gap-2 absolute right-4'>
                    <input type="text" value={query} 
                    onChange={(e)=>setQuery(e.target.value)}
                    className='bg-white px-3 py-1 rounded outline-none
                     text-gray-800 w-48 sm:w-64'placeholder="Search meals"/>
                    <button className='bg-white text-emerald-900 
                    px-3 py-1 rounded  hover:bg-grey-100 
                    font-semibold' >Search</button>
                </form>
            </div>
        </nav>
    </header>
  )
}

export default Header