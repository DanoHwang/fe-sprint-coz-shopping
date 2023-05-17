import React from 'react';

import { productsData } from '../assets/dummy';
import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/ItemCardListStyle';

import ItemCard from '../components/ItemCard';

const { all, bookmark } = itemCardTypes;

export default function ItemCardList ({ count, bookmarks, setBookmarks, searchType = all }) {
  const searchData = (type) => {
    if (type === all) return productsData;

    if (type === bookmark) {
      const values = [];

      for (let value of bookmarks.values()) {
        values.push(value);
      }

      return values;
    }

    return productsData.filter((data) => data.type === searchType);
  };

  const filteredData = searchData(searchType);

  return (
    <S.Wrapper>
      {filteredData.slice(0, count).map((data) => (
        <ItemCard
          data={data}
          key={data.id}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
      ))}
    </S.Wrapper>
  );
}
