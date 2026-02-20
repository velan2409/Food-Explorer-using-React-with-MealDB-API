import { Children, createContext, useContext } from "react";
import { useState, useEffect } from "react";

const STORAGE_KEY="mealdb_favorites"
const FavoritesContext = createContext();

const loadFavoritesFromStorage =()=>{
    try{
        const raw= localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : [];
    }catch(err){
        console.log("Failed to parse favorites from localstorage",err);
        return [];
    }

};

export const FavoritesProvider = ({children})=>{
    const [favorites,setFavorites]=useState(loadFavoritesFromStorage);
    
    useEffect(()=>{
        try{
            localStorage.setItem(STORAGE_KEY,JSON.stringify(favorites));
        }catch(err){
            console.log("Faild to Save Favorites",err);
        }
    },[favorites]);

    const toggle=((meal)=>{
        setFavorites((prev)=>{
            const exist= prev.some((m)=> m.idMeal === meal.idMeal);
            return exist ?  prev.filter((m)=>m.idMeal != meal.idMeal)
             : [...prev,meal];
        });
    });

    const isFavorite =(id)=>favorites.some((m)=> 
        m.idMeal === id); 

    return <FavoritesContext.Provider value={{favorites, toggle, isFavorite}} >
            {children}
        </FavoritesContext.Provider>
};
export const useFavorites=()=>{
    const context=useContext(FavoritesContext);

    if(!context){
        throw new Error("Something went Wrong !!")
    }
    return context;
};