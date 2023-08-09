import React from "react";
import { food } from "../../model";
import FoodList from "@/components/FoodList";
import recipes from '../../data.json'

const Home:React.FC = () => {
  return (
    <div className="text-gray-600 pt-5 bg-gray-200" >
      <h1 className="text-6xl text-center text-gray-700">Recipes</h1>
      <FoodList foods={recipes} />
    </div>
  );
}

export default Home