import {food} from '../../../model';
import recipes from '../../../data.json'
import { use } from "react";

interface RecipeDetailPageProps {
  recipe: food;
}

export default async function page()  {
  //fetch data from data.json file and return it
  const res = await fetch('http://localhost:3000/api/recipe')
  
  const recipe = await res.json()
  return <h1>{recipe.title}</h1>
}

