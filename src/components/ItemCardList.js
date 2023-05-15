import React from 'react';
import ItemCard from '../components/ItemCard';
import { productsData } from '../assets/dummy';

export default function ItemCardList ({ count }) {

  return (
    <div>
      {productsData.slice(0, count).map((data) => (
        <ItemCard data={data} key={data.id} />
      ))}
    </div>
  )
}
