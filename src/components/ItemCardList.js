import React from 'react';
import ItemCard from '../components/ItemCard';
import { productsData } from '../assets/dummy';

export default function ItemCardList ({ count, bookmarks, setBookmarks }) {

  return (
    <div>
      {productsData.slice(0, count).map((data) => (
        <ItemCard
          data={data}
          key={data.id}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
      ))}
    </div>
  )
}
