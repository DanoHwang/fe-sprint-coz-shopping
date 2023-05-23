import React from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/ItemCardListStyle';

import ItemCard from '../components/ItemCard';

export default function ItemCardList ({ items, bookmarks, setBookmarks, searchType = itemCardTypes.all }) {
  const filteredData = searchType === itemCardTypes.all
    ? items
    : items.filter((data) => data.type === searchType);

  return (
    <S.Wrapper>
      {filteredData.map((data) => (
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
