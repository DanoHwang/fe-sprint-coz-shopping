import React from 'react';

import { productsData } from '../assets/dummy';
import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/ItemCardListStyle';

import ItemCard from '../components/ItemCard';

export default function ItemCardList ({ count, bookmarks, setBookmarks, isBookmarkList = false, searchType = itemCardTypes.all }) {
  const itemList = isBookmarkList ? [...bookmarks.values()]: productsData;
  const filteredData = searchType === itemCardTypes.all
    ? itemList
    : itemList.filter((data) => data.type === searchType);

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
