import axios from "axios";
const BASE="https://www.themealdb.com/api/json/v1/1"

export const fetchCategories = ()=>{
    return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
};
export const fetchMealsByCategory= (cat)=>{
    return axios.get(`${BASE}/filter.php?c=${cat}`);
};
export const fetchMealById = (id) => {
  return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}

export const searchMeals= (query)=>{
    return axios.get(`${BASE}/search.php?s=${query}`)
};