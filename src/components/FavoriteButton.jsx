import React from 'react'

const FavoriteButton = ({meal,onToggle, isFav}) => { // bg-white/80 text-grey-700
  return (
    <button onClick={(e)=>{
      onToggle(meal);
    }} 
    className={`cursor-pointer absolute right-2 top-1 p-2 px-2.5 py-1
     rounded-full text-xl ${isFav ?
     "bg-red-500 " : "bg-white/80 text-grey-700"}`}>
       {isFav ? "♥" : "♡" }
    </button>
  )
}

export default FavoriteButton