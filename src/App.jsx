import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import CategoryMeals from './pages/CategoryMeals'
import MealDetail from './pages/MealDetail'
import { FavoritesProvider } from './contexts/FavoritesContext'
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults'

const App = () => {
  return (
      <BrowserRouter>
      <FavoritesProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={'/category/:category'} element={<CategoryMeals/>}></Route>
            <Route path="/meal/:id" element={<MealDetail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path="/search" element={<SearchResults/>} />
            <Route path='*' element={<h1 className='text-center
             mt-20 text-red-900 text-5xl' > 404 Found !</h1>} />
          </Routes>
        </FavoritesProvider>
    </BrowserRouter>
  )
}

export default App
