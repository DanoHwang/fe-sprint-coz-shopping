import React, { useState } from 'react';

import { itemCardTypes } from '../constants/itemCardTypes';
import * as S from '../styles/BookmarkPageStyle';

import FilterList from '../components/FilterList';
import ItemCardList from '../components/ItemCardList';

export default function BookmarkPage () {
  const [ checkedFilter, setCheckedFilter ] = useState(itemCardTypes.all);

  const [ bookmarks, setBookmarks ] = useState(
    new Map(JSON.parse(window.localStorage.getItem('bookmarks'))) || new Map()
  );

  return (
    <S.Wrapper>
      <FilterList setCheckedFilter={setCheckedFilter} checkedFilter={checkedFilter} />
      <ItemCardList
        count={10}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        searchType={checkedFilter}
        isBookmarkList={true}
      />
    </S.Wrapper>
  )
}
