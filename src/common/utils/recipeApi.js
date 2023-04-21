const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

const get = async (url) => {
  const res = await fetch(BASE_URL + url);
  const { meals } = await res.json();

  return meals;
};

export const getCategories = () => get('list.php?c=list');

export const getRecipesByCategory = (category) => get(`filter.php?c=${category}`);

export const getRecipesByName = (name) => get(`search.php?s=${name}`);

export const getRecipeDetailsById = (id) => get(`lookup.php?i=${id}`);
