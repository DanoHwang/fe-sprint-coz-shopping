import React from 'react';
import ItemCard from '../components/ItemCard';
import { productsData } from '../assets/dummy';

export default function MainPage () {

  return (
    <main>
      <h1>상품 리스트</h1>
        {productsData.map((data) => (
          <ItemCard data={data} key={data.id} />
        ))}
      <h1>북마크 리스트</h1>
    </main>
  )
}
