import React from 'react';
import { food } from '../model';
import Link from 'next/link';

interface FoodCardProps {
  foodData: food;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodData }) => {
  const { title, small_description, price, image_url } = foodData;

  return (
    <div className='border p-4 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4 mt-6 md:mt-12 md:h-96'>
      <Link href={`/recipes/${title}`}>
        <div className='h-52'>
          <div className='w-full h-3/4'>
            <img
              className='object-cover w-full h-full'
              src={`/assets/images/${image_url}`}
              alt={title}
            />
          </div>

          <div className='mt-4'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='text-gray-500'>{small_description}</p>
          </div>

          <div className='mt-2 text-lg font-semibold'>${price}</div>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;
