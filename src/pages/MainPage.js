import React, { useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/MainPageStyle';

import ItemCardList from '../components/ItemCardList';
import { manageLocalStorage } from '../utils/manageLocalStorage';

export default function MainPage () {
  const [ bookmarks, setBookmarks ] = useState(
    manageLocalStorage.getBookmarks()
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
        isBookmarkList={true}
      />
    </main>
  );
}
