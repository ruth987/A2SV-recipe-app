import React from 'react';
import { food } from '../model';
import FoodCard from './FoodCard';

interface FoodListProps {
  foods: food[];
}

const FoodList: React.FC<FoodListProps> = ({ foods }) => {
  return (
    <div className='flex flex-wrap justify-between md:flex-col lg:flex-row'>
      {foods.map((foodItem) => (
        <FoodCard key={foodItem.title} foodData={foodItem} />
      ))}
    </div>
  );
};

export default FoodList;
