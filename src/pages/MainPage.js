import React, { useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/MainPageStyle';

import ItemCardList from '../components/ItemCardList';

export default function MainPage () {
  const [ bookmarks, setBookmarks ] = useState(
    new Map(JSON.parse(window.localStorage.getItem('bookmarks'))) || new Map()
  );

  return (
    <main>
      <S.Title>상품 리스트</S.Title>
      <ItemCardList
        count={4}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={itemCardTypes.all}
      />
      <S.Title>북마크 리스트</S.Title>
      <ItemCardList
        count={4}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={itemCardTypes.bookmark}
      />
    </main>
  );
}
